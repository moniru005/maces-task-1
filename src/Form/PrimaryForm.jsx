import { useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const PrimaryForm = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState('');

  const axiosPublic = useAxiosPublic();

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

  

    try {
      const response = await axiosPublic.post("/submit", {
        firstName, lastName, email, phone, message
      });
      setMessage(response.data.message);
      setMessageType('success')
      // Hide success message after 3 seconds (8000 milliseconds)
      setTimeout(() => {
        setMessage('');
      }, 8000);
      form.reset();
    } catch (error) {
      setMessage(error.response.data.error);
      setMessageType('error')
    }
  };

  return (
    <div className="flex justify-center items-center bg-white font-workSans">
      {/* <!-- COMPONENT CODE --> */}
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-full lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex flex-col">
            <h1 className="font-bold uppercase text-2xl lg:text-4xl">
              submission form on our website
            </h1>
            {message && (<p className={`p-2 text-base rounded mt-4 ${messageType==='success'? "bg-green-300 text-green-900 font-medium":"bg-red-300 text-red-600 "}`}>{message}</p>)}
          </div>
          <form onSubmit={handleContactSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                name="firstName"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
                name="lastName"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                required
                name="email"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
                name="phone"
                required
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                name="message"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <input
                type="submit"
                value="Submit"
                className=" bg-[#6A2677] text-gray-100 py-3 px-4 rounded-lg cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PrimaryForm;
