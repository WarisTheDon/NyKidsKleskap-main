import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    
    console.log("Logging in with", email, password);

    const res = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error);
      return;
    }

    localStorage.setItem("user", JSON.stringify(data.user));

    alert("Innlogget!");
    window.location.href = "/profile";
  }

  return (
    <div>
      <h2>Logg inn</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Epost"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br/><br/>

        <input
          type="password"
          placeholder="Passord"
          value={password}
          onChange={e => setPassword(e.target.value)}
        /><br/><br/>

        <button type="submit">Logg inn</button>
      </form>
    </div>
  );
}
