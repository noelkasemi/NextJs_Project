"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
  
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
      
        if (response.status === 200) {
          // Save account information in local storage
        localStorage.setItem("loggedInUser", JSON.stringify(responseData));
          router.push(responseData.redirect).then((success) => {
            if (!success) {
              console.error("Navigation failed");
            }
          });
        } else {
          console.error("Unexpected response status or missing redirect property:", response.status, responseData);
        }
      } else {      
        const errorData = await response.json();
        console.log("Login failed with error:", errorData);
        setError(errorData.error);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred");
    }
  };
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-full sm:w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6 text-black text-center">
          Login
        </h2>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Email
        </label>
        <input
          required
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow px-3 py-2 mb-4 focus:outline-none focus:border-blue-500 text-black"
          placeholder="Enter your email"
        />
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Password
        </label>
        <input
          required
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
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
