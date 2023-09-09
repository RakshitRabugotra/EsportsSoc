import './App.css'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery';

function App() {

  return (
    <>
      <Navbar/>

      <div className='content'>
        <Gallery title="Gallery"/>
      </div>

    </>
  )
}

export default App
