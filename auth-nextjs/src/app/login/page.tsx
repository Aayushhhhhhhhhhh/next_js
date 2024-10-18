"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg"
        type="text"
        id="email"
        value={user.email}
        placeholder="email"
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg"
        type="text"
        id="password"
        value={user.password}
        placeholder="password"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <button
        className="p-2 border border-gray-300 rounded-lg-mb-4"
        onClick={onLogin}
      >
        Login
      </button>
      <Link href="/signup">Visit Signup</Link>
    </div>
  );
}
