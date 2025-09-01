const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300">
      {/* Main Footer */}
      <div className="bg-amber-50 px-6 py-10">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full h-12 w-12" />
              <h2 className="text-2xl font-black">YOUR LOGO</h2>
            </div>

            {/* Divider + blurb */}
            <div>
              <div className="bg-black h-0.5 w-80 max-w-full my-2" />
              <p className="text-left text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum
                suscipit dolorem distinctio consequuntur esse exercitationem
                deserunt, recusandae corporis eveniet nemo.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">LOREM IPSUS</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Ut enim ad minim veniam, quis nostrud exercitation.</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">LOREM IPSUS</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Ut enim ad minim veniam, quis nostrud exercitation.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div className="w-full bg-blue-200 px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <h4 className="text-black font-extrabold text-2xl md:text-4xl text-center mb-4">
            LOREM IPSUM LOREM IPSUM
          </h4>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-gray-800 text-center md:text-left">
              Lorem ipsum dolor sit.
            </p>
            <button className="bg-blue-600 text-white font-semibold py-2 px-5 rounded hover:bg-blue-700 transition">
              Get started
            </button>
          </div>
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;
