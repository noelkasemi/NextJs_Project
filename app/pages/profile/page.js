// components/Profile.js
"use client";
import React, { useState, useEffect } from "react";
import UserProfile from "./[profileId]/page";
import AdminProfile from "./adminProfile/page";
import ModeratorProfile from "./moderatorProfile/page";

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user data from the server with credentials
    fetch("/api/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Include any authentication headers if needed
        credentials: "include",
      },
    })
      .then((response) => response.json())
      .then((userData) => setUser(userData))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  if (!user || Object.keys(user).length === 0) {
    // Loading state or redirect if user not logged in
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <section>
        {user.role === "user" ? (
          <UserProfile user={user} />
        ) : user.role === "admin" ? (
          <AdminProfile user={user} />
        ) : user.role === "moderator" ? (
          <ModeratorProfile user={user} />
        ) : null}
      </section>
    </div>
  );
}
