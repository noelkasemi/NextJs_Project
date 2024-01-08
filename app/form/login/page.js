import Link from "next/link";


export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-6 text-black text-center">
          Login
        </h2>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full border-gray-300 rounded-md shadow px-3 py-2 mb-4 focus:outline-none focus:border-blue-500 text-black"
          placeholder="Enter your username"
        />
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full text-black border-gray-300 rounded-md shadow px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
        />
        <Link
          className="text-blue-600 cursor-pointer  text-sm hover:text-blue-800 font-semibold"
          href="/form/forgot-password"
        >
          Forgot Password?
        </Link>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-400"
        >
          Login
        </button>
        <p className="text-sm mt-2">
          {` Don't have an account?`}{" "}
          <Link
            className="font-semibold text-blue-600 hover:text-blue-800 "
            href="/form/signup"
          >
            {" "}
            Sign up
          </Link>
        </p>
      </form>
    </main>
  );
}
