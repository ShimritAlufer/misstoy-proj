import { ToyPreview} from './ToyPreview.jsx'


export function ToyList({ toys }) {
  console.log('ToyList received toys:', toys)
  return (
    
    <ul>
       
      {toys.map(toy => (
        
        <li key={toy.id}>
         
          <ToyPreview toy={toy} />
        </li>
      ))}
    </ul>
  )
}
