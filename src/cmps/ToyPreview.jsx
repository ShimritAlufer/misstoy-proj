import { Link } from "react-router-dom";

export function ToyPreview({ toy }) {
  return (
    <article className="toy-preview">
      <Link to={`/toy/${toy.id}`}>
        <h4>{toy.name}</h4>
        <p>Price: ${toy.price}</p>
        <p>{toy.inStock ? 'In stock' : 'Out of stock'}</p>
        <p>Labels: {Array.isArray(toy.labels) ? toy.labels.join(', ') : 'No labels'}</p>
      </Link>
    </article>
  )
}


