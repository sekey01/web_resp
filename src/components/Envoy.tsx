import { useState } from "react";

const Envoy = () => {
  const [text, setText] = useState("");

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-blue-200 px-6 py-10">
        <h1 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight text-center mb-6">
          LOREM IPSUM LOREM IPSUM
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full md:w-64 border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition">
            Get started
          </button>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-amber-100 px-6 py-12">
        <h2 className="text-black font-extrabold text-3xl md:text-5xl leading-tight text-center mb-8">
          VIDEO
        </h2>

        <div className="max-w-3xl mx-auto w-full">
          {/* Responsive video wrapper */}
          <div className="w-full rounded-lg shadow-lg overflow-hidden aspect-video">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // replace with your video
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Word Section */}
      <section className="w-full bg-orange-50 border-t border-orange-100 px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* First Column */}
          <div>
            <h3 className="text-black text-2xl font-semibold mb-2">LOREM IPSUM</h3>
            <p className="text-black/80 text-base leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ullamco laboris nisi ut
              aliquip ex ea commodo consequat. lorem ipsum ullamco laboris nisi ut aliquip ex ea
              commodo consequat. lorem ipsum
            </p>
            <p className="text-black/80 text-base leading-relaxed mb-4">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris
              nisi ut aliquip ex ea commodo consequat. lorem ipsum ullamco laboris nisi ut aliquip
              ex ea commodo consequat. lorem ipsum
            </p>
            <p className="text-black/80 text-base leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. lorem ipsum ullamco laboris nisi ut aliquip ex ea commodo
              consequat. lorem ipsum
            </p>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="text-black text-2xl font-semibold mb-2">LOREM IPSUM</h3>
            <p className="text-black/80 text-base leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ullamco laboris nisi ut
              aliquip ex ea commodo consequat. lorem ipsum ullamco laboris nisi ut aliquip ex ea
              commodo consequat. lorem ipsum
            </p>
            <p className="text-black/80 text-base leading-relaxed mb-4">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris
              nisi ut aliquip ex ea commodo consequat. lorem ipsum ullamco laboris nisi ut aliquip
              ex ea commodo consequat. lorem ipsum
            </p>
            <p className="text-black/80 text-base leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. lorem ipsum ullamco laboris nisi ut aliquip ex ea commodo
              consequat. lorem ipsum
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Envoy;
