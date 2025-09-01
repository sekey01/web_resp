import Menu from "./Menu";

const NavBar = () => {
  return (
    <div className="  w-full md:w-full text-white flex items-center justify-between flex-row ">
      {/* Left side: Logo */}
      <div className="flex items-start md:items-center gap-2 md:gap-4 basis-2/3">
        <div className="bg-white rounded-full h-10 w-10"></div>
        <h2 className="font-bold text-2xl  ">Your-Logo</h2>
      </div>

      {/* Right side: Menu */}
      <Menu />
    </div>
  );
};

export default NavBar;
