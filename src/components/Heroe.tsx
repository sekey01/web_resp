import Header from "./Header";
const Heroe = () => {
  return (
   
      <div
        className="
          bg-[url('./src/assets/bg.jpeg')] 
          bg-no-repeat bg-cover bg-center 
          
          w-full
          h-screen
        
          flex flex-col md:flex-row lg:flex-row
          gap-4 md:gap-8 lg:gap-8
          items-center

          
        "
      >
        {/* Header + Text + small-Text */}
     <section>
         <Header/>

        <div className="p-4 text-white text-shadow-amber-200 items-start md:py-20 lg:py-20">
          <h1 className="text-center text-2xl font-bold ">
            LANDING PAGE  WEBSITE DESIGN TEMPLATE
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Ad modi soluta sapiente? Incidunt pariatur tempora officiis
  
          </p>
          

        </div>
     </section>

     {/* Image Section */}
     <section className="flex flex-col gap-6 py-6">
      <div className="bg-white h-46 w-46 rounded-lg items-center p-4 ">
       <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Oovn7IcKbmdPqLmjP4_qquA9cOdHtO7MtTGXRh7Vi2hjwfOXkxqx-Z-f6csbpYEdvlc&usqp=CAU" alt="" />
      </div>
       


        <button className="bg-blue-900 text-black px-4 border-r-8 w-full  hover:bg-amber-300">
          Get Started
        </button>
     </section>

    </div>
  );
};

export default Heroe;
