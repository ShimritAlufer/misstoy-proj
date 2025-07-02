import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import { ToyPreview } from './ToyPreview.jsx'
import { ToyFilter } from './ToyFilter.jsx'
import { setFilter } from '../store/toy/toy.actions.js'

export function ToyList() {
  const dispatch = useDispatch()
  const toys = useSelector(state => state.toyModule.toys)
  const filterBy = useSelector(state => state.toyModule.filterBy)

  function onFilterChange(updatedFilter) {
    dispatch(setFilter(updatedFilter))
  }

  const filteredToys = useMemo(() => {
    let filtered = [...toys]
    if (filterBy.txt) {
      filtered = filtered.filter(toy => toy.name.toLowerCase().includes(filterBy.txt.toLowerCase()))
    }
    if (filterBy.inStock !== '') {
      filtered = filtered.filter(toy => String(toy.inStock) === filterBy.inStock)
    }
    if (filterBy.labels.length) {
      filtered = filtered.filter(toy => filterBy.labels.every(lbl => toy.labels.includes(lbl)))
    }
    if (filterBy.sortBy) {
      filtered.sort((a, b) => {
        if (filterBy.sortBy === 'name') return a.name.localeCompare(b.name)
        if (filterBy.sortBy === 'price') return a.price - b.price
        if (filterBy.sortBy === 'createdAt') return a.createdAt - b.createdAt
      })
    }
    return filtered
  }, [toys, filterBy])

  return (
    <section>
      <ToyFilter onFilterChange={onFilterChange} initialFilter={filterBy} />
      <ul>
        {filteredToys.map(toy => (
          <li key={toy.id}>
            <ToyPreview toy={toy} />
          </li>
        ))}
      </ul>
    </section>
  )
}
