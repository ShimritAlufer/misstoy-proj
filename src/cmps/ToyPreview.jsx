
export function ToyPreview({ toy }) {
  console.log('ToyPreview rendering toy:', toy)
  return (
    <article className="toy-preview">
      
      <h4>{toy.name}</h4>
      <p>Price: ${toy.price}</p>
      <p>{toy.inStock ? 'In stock' : 'Out of stock'}</p>
      {/* <p>Labels: {toy.labels.join(', ')}</p> */}
      <p>Labels: {Array.isArray(toy.labels) ? toy.labels.join(', ') : 'No labels'}</p>
    </article>
  )
}


