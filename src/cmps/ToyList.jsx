import { ToyPreview} from './ToyPreview.jsx'


export function ToyList({ toys }) {
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
