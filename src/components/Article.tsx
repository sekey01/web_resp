import { useState } from "react";

const Article = () => {
  const [text, setText] = useState("");

  return (
    <section className="w-full bg-white px-6 ">
      <h1 className="font-bold text-2xl text-center">Article</h1>

      {/* Two columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {/* First Column */}
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-left">LOREM IPSUM</h2>
          <p className="text-left max-w-prose">
            lorem ipsum incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud hj
          </p>
          <div className="h-60 w-full bg-blue-200 rounded-md flex items-center justify-center">
            Image Here
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-left">LOREM IPSUM</h2>
          <p className="text-left max-w-prose">
            lorem ipsum incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud
          </p>
          <div className="h-60 w-full bg-blue-200 rounded-md flex items-center justify-center">
            Image Here
          </div>
        </div>
      </div>

      {/* TextField Area */}
      <div className="w-full bg-blue-200 px-6 py-10 rounded-lg">
        <h2 className="text-black font-extrabold text-3xl md:text-5xl leading-tight text-center mb-8">
          LOREM IPSUM LOREM IPSUM
        </h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-xl mx-auto"
        >
          <input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full md:w-72 border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition"
          >
            Get started
          </button>
        </form>
      </div>
    </section>
  );
};

export default Article;
