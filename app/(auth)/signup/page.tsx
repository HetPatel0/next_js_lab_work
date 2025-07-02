"use client";

import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <form
        className="p-4 border rounded-3 shadow-sm bg-white"
        style={{ minWidth: "300px" }}
        onSubmit={handleSignup}
      >
        <h2 className="mb-4 text-center">Sign Up</h2>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Sign Up
        </button>
        <p className="mt-3 mb-0 text-center">
          Already have an account?{" "}
          <a
            href="
          /
          "
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
