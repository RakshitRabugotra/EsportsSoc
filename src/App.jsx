import './App.css'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Gallery from './components/Gallery';

function App() {

  return (
    <>
      <Navbar/>
      <div className='content'>
      <Card/>
      </div>

      <h2>Feature</h2>
      <div className='content'>
        <Gallery title="Gallery"/>
      </div>

    </>
  )
}

export default App
