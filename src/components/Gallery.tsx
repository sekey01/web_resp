
const Gallery = () => {
  return (
    <div className="items-center justify-center-safe w-100 md:w-full">
      <h1 className="text-black font-extrabold text-5xl leading-tight text-center mb-8">
          GALLERY
        </h1>

        <div className="flex flex-row justify-center gap-4">
            <img src="https://via.placeholder.com/150" alt="Gallery Image 1" />
            <img src="https://via.placeholder.com/150" alt="Gallery Image 2" />
            <img src="https://via.placeholder.com/150" alt="Gallery Image 3" />
        </div>
           

        {/* same three images with Lorem Ipsum Under each */}
        <div className="flex  flex-col md:flex-row items-center justify-center gap-4 p-6">
            <div className="flex flex-col items-center basis-1/3">
                <img src="https://via.placeholder.com/150" alt="Gallery Image 1" />
                <p className="text-black text-3xl font-bold text-center p-4">
                    Lorem 
                </p>
            </div>
            <div className="flex flex-col  items-center basis-1/3">
                <img src="https://via.placeholder.com/150" alt="Gallery Image 2" />
                <p className="text-black text-3xl font-bold text-center p-4">
                    Lorem
                </p>
            </div>
            <div className="flex flex-col items-center basis-1/3">
                <img src="https://via.placeholder.com/150" alt="Gallery Image 3" />
                <p className="text-black text-3xl font-bold text-center p-4">
                    Lorem
                </p>
            </div>
        </div>



     {/* Image with text sstacked on it  */}
       <div className="bg-[url('./src/assets/bg.jpeg')] bg-no-repeat bg-cover bg-center h-200 w-100 md:w-full p-18 right-40">

       <div className="flex gap-4 flex-col items-start md:items-center justify-center p-6">
        <h2 className="font-bold text-6xl text-white basis-0.5"> LOREM IPSUM </h2>
        <h2 className="font-bold text-6xl text-white basis-0.5"> DOLOR SIT AMET </h2>
        <h2 className="font-bold text-6xl text-white basis-0.5"> SED DIAM </h2>

        <p className="text-white text-center basis-2.5 w-50 md:w-full text-wrap">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Dolorem, accusamus quasi voluptatibus enim dolores quis ad in 
            numquam sit officiis facilis aut natus aliquid.
        </p>
        
      </div>
</div>




    </div>
  )
}

export default Gallery