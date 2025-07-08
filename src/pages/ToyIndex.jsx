import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadToys, setFilter } from '../store/toy/toy.actions.js'
import { ToyFilter } from '../cmps/ToyFilter.jsx'
import { ToyList } from '../cmps/ToyList.jsx'


export function ToyIndex() {
  const dispatch = useDispatch()
  const toys = useSelector(storeState => storeState.toyModule.toys)
  const filterBy = useSelector(storeState => storeState.toyModule.filterBy)

  useEffect(() => {
    loadToys()
  }, [filterBy])


  function onFilterChange(updatedFilter) {
  setFilter(updatedFilter)
}

  if (!toys) return <div>Loading...</div>
  const { name, label, inStock } = filterBy
  return (
    <section>
     
      <h1>Welcome to our Toys World!</h1>
      
      <ToyFilter onFilterChange={onFilterChange} initialFilter={{name, label, inStock}} />
      <ToyList toys={toys} filterBy={{ name, label, inStock }} />
       
    </section>
  )
}

