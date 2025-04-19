import React, { useState, useEffect } from "react";

const AdminPage = ({ user }) => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    availableQuantity: 0,
    productValidity: "",
    image: "",
  });

  const apiUrl = "http://localhost:9097/api/products";

  // Check if the user has admin access
  useEffect(() => {
    if (user.role !== "admin") {
      alert("Access Denied: Admins only!");
      window.location.href = "/"; // Redirect to home or login page
    } else {
      fetchProducts();
    }
  }, 