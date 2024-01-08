import Login from "./login/page";
import ForgotPassword from "./forgot-password/page";
import ContactForm from "./contact/page";
import Signup from "./signup/page";

export default function Form({ type }) {
  return (
    <section>
      {type === "login" ? (
        <Login />
      ) : type === "signup" ? (
        <Signup />
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
