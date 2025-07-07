import { useEffect, useState, useRef } from 'react'
import { debounce } from "../services/util.service.js"

const LABELS = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered']


export function ToyFilter({ onFilterChange, initialFilter }) {
  const [filterBy, setFilterBy] = useState(initialFilter)
 const onSetFilterByDebounce = useRef(debounce(onFilterChange, 400)).current

  useEffect(() => {
    onSetFilterByDebounce(filterBy)
  }, [filterBy])

  function handleChange({ target }) {
    let { name: field, value, options } = target
    let newValue
    if (field === 'labels') {
      newValue = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value)
      setFilterBy(prev => ({ ...prev, labels: newValue }))
    } else if (field === 'inStock') {
      setFilterBy(prev => ({ ...prev, inStock: value }))
    } else {
      setFilterBy(prev => ({ ...prev, [field]: value }))
    }

  }

  const { name = '', labels = [], inStock = '', sortBy = '' } = filterBy


  return (
    <section className="toy-filter">
      <input value={name} name="name" onChange={handleChange} />
      <select name="inStock" value={inStock} onChange={handleChange}>
        <option value="">All</option>
        <option value="true">In Stock</option>
        <option value="false">Out of Stock</option>
      </select>
      <select
        name="labels"
        multiple
        value={labels}
        onChange={handleChange}
      >
        {LABELS.map(label => (
          <option key={label} value={label}>
            {label}
          </option>
        ))}
      </select>

      <select name="sortBy" value={sortBy} onChange={handleChange}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="createdAt">Created At</option>
      </select>
    </section>
  )
}
