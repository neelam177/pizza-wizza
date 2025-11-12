"use client";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
const page = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <div
        style={{
          height: "90vh",
          backgroundImage:
            'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: "cover",
        }}
        className="flex items-center"
      >
        <div className="container w-full max-w-md mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter a Name"
                required
                value={credentials.name}
                onChange={handleChange}
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter a email"
                required
                value={credentials.email}
                onChange={handleChange}
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="*****"
                name="password"
                required
                onChange={handleChange}
                value={credentials.password}
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lacation"
                className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
              >
                Loaction
              </label>
              <input
                type="text"
                name="lacation"
                placeholder="Enter your Address"
                required
                value={credentials.location}
                onChange={handleChange}
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex">
              <button
                className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100"
                type="submit"
              >
                Singup
              </button>
              <Link href="/login" style={{ all: "unset" }}>
                <button className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100">
                  Already a user?
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
