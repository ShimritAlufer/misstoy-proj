import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { setFilter } from '../store/toy/toy.actions.js'
import { ToyFilter } from './ToyFilter.jsx'
import { ToyPreview } from './ToyPreview.jsx'

export function ToyList() {
  const dispatch = useDispatch()
  const toys = useSelector(state => state.toyModule.toys)
  const filterBy = useSelector(state => state.toyModule.filterBy)

  const filteredToysRef = useRef([]) 
  const [renderToys, setRenderToys] = useState([]) 

  function onFilterChange(updatedFilter) {
    dispatch(setFilter(updatedFilter))
  }

  useEffect(() => {
    let filtered = [...toys]

    if (filterBy.txt) {
      filtered = filtered.filter(toy =>
        toy.name.toLowerCase().includes(filterBy.txt.toLowerCase())
      )
    }

    if (filterBy.inStock !== '') {
      filtered = filtered.filter(toy =>
        String(toy.inStock) === filterBy.inStock
      )
    }

    if (filterBy.labels.length) {
      filtered = filtered.filter(toy =>
        filterBy.labels.every(lbl => toy.labels.includes(lbl))
      )
    }

    if (filterBy.sortBy) {
      filtered.sort((a, b) => {
        if (filterBy.sortBy === 'name') return a.name.localeCompare(b.name)
        if (filterBy.sortBy === 'price') return a.price - b.price
        if (filterBy.sortBy === 'createdAt') return a.createdAt - b.createdAt
      })
    }

    filteredToysRef.current = filtered
    setRenderToys(filtered)

  }, [toys, filterBy])

  return (
    <section>
      <ToyFilter onFilterChange={onFilterChange} initialFilter={filterBy} />
      <ul>
        {renderToys.map(toy => (
          <li key={toy.id}>
            <ToyPreview toy={toy} />
          </li>
        ))}
      </ul>
    </section>
  )
}
