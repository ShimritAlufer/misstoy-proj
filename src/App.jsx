//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ToyList } from './cmps/ToyList.jsx'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { UserMsg} from './cmps/UserMsg.jsx'

export function App() {
  return (
    <Router>
      <AppHeader />
      <main className="app">
        <h1>Miss Toy</h1>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/toy" element={< ToyIndex/>} />
          <Route path="/toy/edit/:toyId?" element={<ToyEdit />} />
          <Route path="/toy/:toyId" element={<ToyDetails />} />
        </Routes>
      </main>
      <UserMsg />
    </Router>
  )
}

export default App
