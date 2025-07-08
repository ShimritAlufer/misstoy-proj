import { ToyPreview} from './ToyPreview.jsx'
import { Link, Outlet } from "react-router-dom";

export function ToyList({ toys }) {
  return (
    
    <ul>
       
      {toys.map(toy => (
        
        <li key={toy.id}>
          <ToyPreview toy={toy} />
          <section>
            <Link style={{ color: 'blue' }} to={`/toy/edit/${toy.id}`}>Edit</Link>
            
          </section>
          <Outlet/>
        </li>
      ))}
    </ul>
  )
}
