import { useEffect, useState } from 'react'

const LABELS = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered']

export function ToyFilter({ onFilterChange, initialFilter }) {
  const [filterBy, setFilterBy] = useState(initialFilter)

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFilterChange(filterBy)
    }, 500)
    return () => clearTimeout(timeout)
  }, [filterBy])

  function handleChange({ target }) {
    const { name, value, type, checked } = target
    if (name === 'labels') {
      let newLabels = [...filterBy.labels]
      if (checked) newLabels.push(value)
      else newLabels = newLabels.filter(lbl => lbl !== value)
      setFilterBy(prev => ({ ...prev, labels: newLabels }))
    } else if (name === 'inStock') {
      setFilterBy(prev => ({ ...prev, inStock: value }))
    } else {
      setFilterBy(prev => ({ ...prev, [name]: value }))
    }
  }

  return (
    <section className="toy-filter">
      <input type="text" name="txt" placeholder="Search by name" value={filterBy.txt} onChange={handleChange} />
      <select name="inStock" value={filterBy.inStock} onChange={handleChange}>
        <option value="">All</option>
        <option value="true">In Stock</option>
        <option value="false">Out of Stock</option>
      </select>
      <fieldset>
        <legend>Labels</legend>
        {LABELS.map(label => (
          <label key={label}>
            <input
              type="checkbox"
              name="labels"
              value={label}
              checked={filterBy.labels.includes(label)}
              onChange={handleChange}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <select name="sortBy" value={filterBy.sortBy} onChange={handleChange}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="createdAt">Created At</option>
      </select>
    </section>
  )
}
