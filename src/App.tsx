import './App.css'
import "tailwindcss"
import Heroe from './components/Heroe'
import Features from './components/Features'
import Envoy from './components/Envoy'
import  Gallery from './components/Gallery'
import Article from './components/Article'
import Map from './components/Map'
import Footer from './components/Footer'


function App() {

  return (
    <div className=''>
      <Heroe />
      <Features />
      <Envoy/>
      <Gallery/>
      <Article/>
      <Map/>
      <Footer/>

    </div>
  )
}

export default App
