//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ToyList } from './cmps/ToyList.jsx'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'

export function App() {
  return (
    <Router>
      <main className="app">
        <h1>Miss Toy</h1>
        <Routes>
          <Route path="/" element={< ToyIndex/>} />
          <Route path="/edit/:toyId?" element={<ToyEdit />} />
          <Route path="/details/:toyId" element={<ToyDetails />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
