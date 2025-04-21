import React, { useState } from "react";

function Login({ onLogin, loading }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials); // Call the onLogin prop passed from the parent component
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-400"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
