import Image from "next/image";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8">
      {/* Header Image */}
      <Image src="/desktop-header-24.png" alt="Header" width={1050} height={841} />

      {/* Contact Information Section */}
      <div className="max-w-5xl w-full text-center mt-12">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Visit Our Office
        </h2>
        <p className="text-lg text-gray-500 mt-2 font-medium">
          We help small businesses with big ideas
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-3 gap-12 mt-10">
          {/* Email Contact */}
          <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-2xl w-80">
            <span className="text-5xl text-blue-500">📞</span>
            <p className="mt-4 text-gray-700 text-lg font-semibold">georgia.young@example.com</p>
            <p className="text-gray-600 text-lg">georgia.young@site.com</p>
            <button className="mt-6 px-5 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition">
              Get Support
            </button>
          </div>

          {/* Location Card (Centered & Highlighted) */}
          <div className="flex flex-col items-center p-10 bg-gray-900 text-white shadow-xl rounded-2xl w-80">
            <span className="text-5xl">📍</span>
            <p className="mt-4 text-lg font-semibold">georgia.young@example.com</p>
            <p className="text-lg">georgia.young@site.com</p>
            <button className="mt-6 px-5 py-3 bg-white text-gray-900 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition">
              Submit Request
            </button>
          </div>

          {/* Email Contact */}
          <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-2xl w-80">
            <span className="text-5xl text-blue-500">✉️</span>
            <p className="mt-4 text-gray-700 text-lg font-semibold">georgia.young@example.com</p>
            <p className="text-gray-600 text-lg">georgia.young@site.com</p>
            <button className="mt-6 px-5 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition">
              Get Support
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Let's Talk</h2>
        <p className="text-gray-500 text-lg font-medium mt-2">We can't wait to meet you</p>
        <button className="mt-6 px-7 py-4 bg-blue-600 text-white  text-lg font-semibold shadow-lg hover:bg-blue-700 transition">
          Try it free now
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
