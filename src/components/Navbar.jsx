import logo from "../../public/favicon2.png"
const Navbar = () => {
  return (
    <div>
      <div className=" shadow-lg p-4 flex items-center justify-center ">
        <div className="rounded flex flex-row items-center border border-[#6A2677] p-2 gap-1">
            <img className="w-12" src={logo} alt="Logo" />
          <h1 className="uppercase text-[52px] font-bold  w-fit text-black">
            Maces
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
