const Aesther = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between min-h-screen px-6 md:px-12">
      {/* Left Column: Text + Button */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight text-left">
          LANDING PAGE WEBSITE DESIGN TEMPLATE
        </h1>
        <p className="text-white text-lg leading-relaxed text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et.
        </p>
        <p className="text-white text-lg leading-relaxed text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime numquam officia.
        </p>
        <button className="w-fit px-10 py-3 mt-4 bg-amber-700 text-black font-semibold rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Right Column: Image Placeholder */}
      <div className="w-full md:w-1/2 flex justify-center p-6">
        <div className="w-[300px] h-[200px] bg-white rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-gray-500">Image Here</span>
        </div>
      </div>
    </div>
  );
};

export default Aesther;
