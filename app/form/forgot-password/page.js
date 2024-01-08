
const ForgotPassword = () => {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <form className="bg-white p-8 rounded shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-semibold text-black text-center mb-6">Forgot Password</h2>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full text-black border-gray-300 rounded-md shadow px-3 py-2 mb-6 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-400"
          >
            Reset Password
          </button>
        </form>
      </main>
    );
  };
  
  export default ForgotPassword;
  