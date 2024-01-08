import Link from "next/link";

export default function Signup() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <form className="bg-white p-8 rounded shadow-md w-full sm:w-96">
          <h2 className="text-2xl text-black text-center font-semibold mb-6">Sign Up</h2>
          <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full text-black border-gray-300 rounded-md shadow px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Choose a username"
          />
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full text-black border-gray-300 rounded-md shadow px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full text-black border-gray-300 rounded-md shadow px-3 py-2 mb-6 focus:outline-none focus:border-blue-500"
            placeholder="Choose a password"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-400"
          >
            Sign Up
          </button>
          <p>
            Already have an account? <Link href='/form/login' className="font-semibold text-blue-400">Login</Link>
          </p>
        </form>
      </main>
    )
}