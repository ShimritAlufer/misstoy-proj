import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const toyService = {
    createToy,
    query,
    getById
}

const STORAGE_KEY = 'toys'

_createToys()

const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle',
'Outdoor', 'Battery Powered']

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

async function query(filterBy = {}) {
    try {
        let toys = await storageService.query(STORAGE_KEY)
        if (filterBy) {
            let { name = '', label = '', inStock = false } = filterBy
            toys = toys.filter(toy =>
                toy.label.toLowerCase().includes(label.toLowerCase()) &&
                toy.name.toLowerCase().includes(name.toLowerCase()) &&
                toy.inStock === inStock
            )

            const { sortBy, sortDir = 'asc' } = filterBy
            const dir = sortDir === 'asc' ? 1 : -1

            if (sortBy) {
                robots.sort((a, b) => {
                    if (sortBy === 'name') return a.name.localeCompare(b.name) * dir
                    if (sortBy === 'price') return (a.price - b.price) * dir
                    if (sortBy === 'createdAt') return (a.createdAt - b.createdAt) * dir
                })
            }

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
