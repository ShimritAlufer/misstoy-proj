import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const toyService = {
    createToy,
    query,
    getById
}

const STORAGE_KEY = 'toys'

_createToys()

// const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle',
// 'Outdoor', 'Battery Powered']

function createToy(name = '', price = 0, labels=[], createdAt = Date.now(), inStock = true) {
  return {
    id: _makeId(),
    name,
    price,
    labels,
    createdAt,
    inStock,
  }
}


async function query(filterBy = {}) {
  try {
    let toys = await storageService.query(STORAGE_KEY)

    let {
      name = '',
      labels = [],
      inStock = '',
      sortBy,
      sortDir = 'asc'
    } = filterBy

    if (name) {
      toys = toys.filter(toy =>
        toy.name.toLowerCase().includes(name.toLowerCase())
      )
    }

    if (labels.length) {
      toys = toys.filter(toy => 
        labels.every(lbl => 
          toy.labels.some(toyLbl => toyLbl.toLowerCase() === lbl.toLowerCase())
        )
      )
    }

    if (inStock !== '') {
      toys = toys.filter(toy =>
        String(toy.inStock) === inStock
      )
    }

    if (sortBy) {
      const dir = sortDir === 'asc' ? 1 : -1
      toys.sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name) * dir
        if (sortBy === 'price') return (a.price - b.price) * dir
        if (sortBy === 'createdAt') return (a.createdAt - b.createdAt) * dir
        return 0
      })
    }

    return toys
  } catch (error) {
    console.log('error:', error)
    throw error
  }
}


function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function _createToys() {
    let toys = utilService.loadFromStorage(STORAGE_KEY)
    if (!toys || !toys.length) {
        toys = [
            { id: 't101', name: 'Talking Doll', price: 123, labels:['Doll', 'Battery Powered', 'Baby'], createdAt: 1631031801011, inStock: true },
            { id: 't102', name: 'Racing Car', price: 80, labels:['On wheels', 'Battery Powered', 'Baby', 'Outdoor'], createdAt: 1631031801011, inStock: true },
            { id: 't103', name: 'Spiderman Puzzle', price: 142, labels:['Box game', 'Puzzle'], createdAt: 1631031801011, inStock: false },
            { id: 't104', name: 'Coloring Book', price: 60, labels:['Art', 'Baby'], createdAt: 1631031801011, inStock: true },
            { id: 't105', name: 'Monopoly', price: 200, labels:['Box game'], createdAt: 1631031801011, inStock: false },
          
        ]
        utilService.saveToStorage(STORAGE_KEY, toys)
    }
}
