import "./App.css"
//import Heroe from "./components/Heroe"
import Heroe from "./components/Heroe"
import Features from "./components/Features"
import Envoy from "./components/Envoy"
import Article from "./components/Article"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    
    
        <section className="w-full  px-2 sm:px-4 md:px-12 lg:px-20 py-8">
      <Heroe/>    
       </section>
       
   <section className="w-full  px-2 sm:px-4 md:px-12 lg:px-20 py-8">
      <Features/>    
       </section>


<section className="w-full  px-2 sm:px-4 md:px-12 lg:px-20 py-8">
      <Envoy/>    
       </section>

<section className="w-full  px-2 sm:px-4 md:px-12 lg:px-20 py-8">
      <Article/>    
       </section>


       <section className="w-full  px-2 sm:px-4 md:px-12 lg:px-20 py-8">
      <Footer/>    
       </section>
    
    </>

  )
}

export default App
