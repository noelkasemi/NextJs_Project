// pages/api/login.js
import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email, password } = req.body;

  try {
    // Fetch user data based on the email
    const { db } = await connectToDatabase();
    const user = await db.collection("users").findOne({ email });

    if (user) {
      if (user.password === password) {

        // Set the redirection path 
        const redirect = "/profile";

        // Respond with the redirection path
        return res.status(200).json({ redirect });
      } else {

        return res.status(401).json({ error: "Password does not match", redirect: null });
      }
    } else {
      console.log("User not found for email:", email);
      return res.status(404).json({ error: "User not found", redirect: null });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "An unexpected error occurred", redirect: null });
  }
}
