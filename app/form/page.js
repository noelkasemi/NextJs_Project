"use client"
import Login from "./login/page";
import ForgotPassword from "./forgot-password/page";
import ContactForm from "./contact/page";
import Signup from "./signup/page";
import { useRouter } from 'next/router';

export default function Form({ type }) {

  return (
    <section>
      {type === "login" ? (
        <Login />
      ) : type === "signup" ? (
        <Signup onSignup={handleSignup} /> 
      ) : type === "forgotPassword" ? (
        <ForgotPassword />
      ) : type === "contact" ? (
        <ContactForm />
      ) : (
        "No form avaiabale"
      )}
    </section>
  );
}
