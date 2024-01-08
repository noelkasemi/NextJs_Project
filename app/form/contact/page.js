
const ContactForm = () => {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <form className="bg-white p-8 rounded shadow-md w-full sm:w-96" >
          <h2 className="text-2xl font-semibold mb-6 text-black text-center">Contact Us</h2>
  
          <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full text-black border-gray-300 rounded-md shadow px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Your name"
            required
          />
  
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full text-black border-gray-300 rounded-md shadow px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Your email"
            required
          />
  
          <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full text-black border-gray-300 rounded-md shadow px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Subject"
            required
          />
  
          <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full text-black border-gray-300 rounded-md shadow px-3 py-2 mb-6 focus:outline-none focus:border-blue-500"
            placeholder="Your message"
            required
          ></textarea>
  
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-400"
          >
            Submit
          </button>
        </form>
      </main>
    );
  };
  
  export default ContactForm;
  