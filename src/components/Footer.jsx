import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="font-workSans">
      <hr className=" border-blue-gray-50" />
      <footer className=" flex flex-row w-full bg-[#6A2677] p-4 shadow-xl items-center justify-between">
        <div>
          <p className="block text-center font-sans text-base font-normal leading-relaxed text-white antialiased">
            © {currentYear} Macesbd. Developed by Md. Monir Uddin
          </p>
        </div>
        <div className="flex flex-row gap-6 text-xl text-white">
          <button>
            <FaFacebook></FaFacebook>
          </button>
          <button>
            <FaTwitter></FaTwitter>
          </button>
          <button>
            <FaLinkedin></FaLinkedin>
          </button>
          <button>
            <FaInstagram></FaInstagram>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
