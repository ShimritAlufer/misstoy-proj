import { useNavigate, useParams } from "react-router-dom"
import { toyService } from "../services/toy.service"
import { useEffect, useState } from "react"
import { saveToy } from "../store/toy/toy.actions"

export function ToyEdit() {
    const [toy, setToy] = useState(null)

    const navigate = useNavigate()
    //const { toyId } = useParams()
    const params = useParams()

    useEffect(() => {
        if (params.toyId) {
            loadToy()
        }
    }, [])

    async function loadToy() {
        try {
            const toy = await toyService.getById(params.toyId)
            setToy(toy)
        } catch (error) {
            console.log('error:', error)
        }
    }

     async function onSubmitToy(ev) {
        ev.preventDefault()
        try {
            await saveToy(toy)
            navigate('/toy')
        } catch (err) {
            console.log('err:', err)
        }

    }

  return (
    <section>
      <h2>Edit Toy</h2>
      <form onSubmit={onSubmitToy}>
        <label>Name: <input type="text" /></label>
        <label>Price: <input type="number" /></label>
        <label>In Stock: <input type="checkbox" /></label>
        <button>Save</button>
      </form>
    </section>
  )
}
