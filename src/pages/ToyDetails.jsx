import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'
import { toyService } from "../services/toy.service"

export function ToyDetails() {

const [toy, setToy] = useState(null)
    const params = useParams()
    useEffect(() => {
        loadToy()
    }, [params.toyId])

    async function loadToy() {
        try {
            const toy = await toyService.getById(params.toyId)
            setToy(toy)
        } catch (error) {
            console.log('error:', error)
        }
    }

    if (!toy) return <div>Loading...</div>

  return (
    <section>
      <h2>Toy Details</h2>
      <h4>{toy.name}</h4>
      <p>Price: ${toy.price}</p>
      <p>{toy.inStock ? 'In stock' : 'Out of stock'}</p>
      <p>Labels: {Array.isArray(toy.labels) ? toy.labels.join(', ') : 'No labels'}</p>
    </section>
  )
}
