import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const navigate = useNavigate();

  const handleLoginSuccess = (userName) => {
    const storedUserName = userName;
    alert("Welcome, " + storedUserName + "!");
    // Additional logic after successful login
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://job-platform-ffzr.onrender.com/login", { email, password, name })
      .then((res) => {
        const userName = res.data.user.name;
        console.log(userName); // Logging the username
        handleLoginSuccess(userName); // Calling the function to display alert
        if (res.status === 200) {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <div className="flex justify-center items-center bg-secondary min-h-screen px-4">
      <div className="bg-gray-300 p-5 rounded w-full max-w-md">
        <h2 className="text-2xl mb-3">Log in</h2>
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-3">
            <label htmlFor="name" className="block">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              autoComplete="off"
              className="border border-gray-300 rounded p-3 w-full"
              onChange={(e) => setName(e.target.value)}
            />
          </div> */}
          <div className="mb-3">
            <label htmlFor="email" className="block">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              autoComplete="off"
              className="border border-gray-300 rounded p-3 w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              autoComplete="off"
              className="border border-gray-300 rounded p-3 w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-jobBlue py-2 w-full rounded">
            Log in
          </button>
          <p className="mt-3 mb-3">Dont Have an account?</p>
          <Link
            to="/sign-up"
            className="bg-gray-500 border w-100 p-2 rounded text-white"
          >
            Sign up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
