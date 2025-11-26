
import React, { useState } from "react";
import { auth, provider } from "./firebase.init"; // correct firebase import
import { signInWithPopup } from "firebase/auth";
import AdminPanel from "./AdminPanel";

const AdminLogin = () => {
  const [user, setUser] = useState(null);

  // Add your admin emails here
  const adminEmails = ["majbaurkhan@gmail.com"];

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;

      if (adminEmails.includes(email)) {
        setUser(result.user); // allow access
      } else {
        alert("Access denied. Not an admin.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (user) return <AdminPanel user={user} />;

  return (
    <div>
      <h2>Admin Login</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default AdminLogin;