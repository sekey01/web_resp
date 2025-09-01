import FeatureSample from "./FeatureSample";

const Features = () => {
  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-4">
          Features
        </h2>

        <p className="mx-auto max-w-3xl text-center text-base md:text-lg text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veritatis ab vel molestias, maiores molestiae asperiores!
        </p>

        {/* Card grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureSample />
          <FeatureSample />
          <FeatureSample />
        </div>
      </div>
    </section>
  );
};

export default Features;
