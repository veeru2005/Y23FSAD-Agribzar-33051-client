import React, { useState } from "react";

function RoundedSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
  input: {
    width: "225px",
    padding: "10px",
    borderRadius: "15px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
  },
  button: {
    padding: "15px 25px",
    borderRadius: "15px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default RoundedSearchBar;
