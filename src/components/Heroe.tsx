import NavBar from "./NavBar";
import Aesther from "./Aesther";

const Heroe = () => {
  return (
    <div className="w-full h-full bg-blue-200 border border-gray-300">
      {/* Hero Section */}
      <div
        className="
          bg-[url('./src/assets/bg.jpeg')] 
          bg-no-repeat bg-cover bg-center 
          h-screen w-full 
          p-10
          

          flex flex-col
        "
      >
        <NavBar />
        <Aesther />
      </div>
    </div>
  );
};

export default Heroe;
