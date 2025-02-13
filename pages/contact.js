import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Me</h1>
          <p className="text-lg text-gray-700 mb-6">
            If you have any inquiries or would like to connect, please feel free to reach out.
          </p>
          <div className="space-y-5 text-left">
            <ContactItem label="Email" value="thrinadech.pit@gmail.com" link="mailto:thrinadech.pit@gmail.com" />
            <ContactItem label="Phone" value="081-652-2376" />
            <ContactItem label="Line ID" value="0816522376" />
            <ContactItem label="GitHub Profile" value="ixone0-GitHub" link="https://github.com/ixone0" />
          </div>
        </div>
      </div>
    </>
  );
}

function ContactItem({ label, value, link }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800">{label}:</h2>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {value}
        </a>
      ) : (
        <p className="text-gray-700">{value}</p>
      )}
    </div>
  );
}
