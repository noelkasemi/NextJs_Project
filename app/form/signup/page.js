"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Header from "@/app/partials/header";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [show, setShow] = useState(false)
  const router = useRouter();



  const handleUsernameChange = (e) => {
    setFormData({
      ...formData,
      username: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send the form data to the server
      const response = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // The user is successfully created on the server
        const newUser = await response.json();
        const userId = newUser._id; // Assuming your user object has an "_id" field
        // Save account information in local storage
        localStorage.setItem("loggedInUser", JSON.stringify(formData));
        // Redirect to the user's profile page
        router.push(`/pages/profile/${userId}`);
      } else {
        // Handle errors from the server
        console.error("Signup failed:", response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Signup failed:", error.message);
    }
  };
  

  return (
    <section>
      <Header profile={false} isAuthenticated={show} />    
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full sm:w-96"
      >
        <h2 className="text-2xl text-black text-center font-semibold mb-6">
          Sign Up
        </h2>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Username
        </label>
        <input
        required
          onChange={handleUsernameChange}
          type="text"
          id="username"
          name="username"
          className="w-full text-black border-gray-300 rounded-md shadow px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Choose a username"
        />
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Email
        </label>
        <input
        required
          onChange={handleEmailChange}
          type="email"
          id="email"
          name="email"
          className="w-full text-black border-gray-300 rounded-md shadow px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
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
          onChange={handlePasswordChange}
          type="password"
          id="password"
          name="password"
          className="w-full text-black border-gray-300 rounded-md shadow px-3 py-2 mb-6 focus:outline-none focus:border-blue-500"
          placeholder="Choose a password"
        />
        <button
        onClick={() => setShow(true)}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-400"
        >
          Sign Up
        </button>
        <p>
          Already have an account?{" "}
          <Link href="/form/login" className="font-semibold text-blue-400">
            Login
          </Link>
        </p>
      </form>
    </main>
    </section>

  );
}
