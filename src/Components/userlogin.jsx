import React, { useState } from "react";
import axios from "axios";

// CSS Styling for the Login Page
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "25vh",
    backgroundColor: "#f4f4f9",
  },
  box: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "350px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
    fontWeight: "600",
  },
  input: {
    width: "94%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "10px",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
  messageSuccess: {
    fontSize: "16px",
    color: "green",
    marginTop: "20px",
  },
  messageError: {
    fontSize: "16px",
    color: "red",
    marginTop: "20px",
  },
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [messageType, setMessageType] = useState(""); // success or error

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:9099/auth/login", {
        username,
      });

      console.log("Login response:", response.data);

      if (response.data.token) {
        localStorage.setItem("jwt", response.data.token);
        setMessage("Login successful! Token saved.");
        setMessageType("success");
      } else {
        setMessage("Login failed. No token received.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Login failed", error);
      setMessage("Login failed.");
      setMessageType("error");
    }
  };

  const validateToken = async () => {
    const storedToken = localStorage.getItem("jwt");

    if (!storedToken) {
      setMessage("No token found. Please log in.");
      setMessageType("error");
      return;
    }

    console.log("Stored Token:", storedToken);

    try {
      const response = await axios.get(
        `http://localhost:9099/auth/validate?token=${storedToken}`
      );

      console.log("Server Response:", response.data);

      if (response.data.code === "200") {
        setMessage(`Token valid! Welcome, ${response.data.message}`);
        setMessageType("success");
      } else {
        setMessage("Invalid token. Please log in again.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Token validation failed:", error);
      setMessage("Token validation failed.");
      setMessageType("error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>JWT Login</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={handleLogin}
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Login
        </button>
        <button onClick={validateToken} style={styles.button}>
          Validate Token
        </button>
        <p style={messageType === "success" ? styles.messageSuccess : styles.messageError}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default Login;
