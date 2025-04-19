import { margin } from "@mui/system";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    availableQuantity: 0,
    productValidity: "",
    image: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);

  const apiUrl = "http://localhost:9097/api/products";

  // GET Method: Fetch all products
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error: ", err));
  }, [apiUrl]);

  // POST Method: Add a new product
  const addProduct = () => {
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts([...products, data]);
        setNewProduct({
          name: "",
          description: "",
          availableQuantity: 0,
          productValidity: "",
          image: "",
        });
      })
      .catch((err) => console.error("POST error: ", err));
  };

  // PUT Method: Update an existing product
  const updateProduct = () => {
    if (!editingProduct) return;

    fetch(`${apiUrl}/${editingProduct.productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          products.map((prod) =>
            prod.productId === data.productId ? data : prod
          )
        );
        setEditingProduct(null);
      })
      .catch((err) => console.error("PUT error: ", err));
  };

  // DELETE Method: Delete a product
  const deleteProduct = (id) => {
    fetch(`${apiUrl}/${id}`, { method: "DELETE" })
      .then(() => {
        setProducts(products.filter((prod) => prod.productId !== id));
      })
      .catch((err) => console.error("DELETE error: ", err));
  };

  return (
    <div style={styles.container}>
      

      {/* Conditional Rendering for Forms */}
      <div style={styles.form}>
      
        
        {editingProduct ? (
          // Edit Product Form
          <>
            <h2 style={styles.formHeader}>Edit Product</h2>
            
            <input
              type="text"
              placeholder="Name"
              value={editingProduct.name}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, name: e.target.value })
              }
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Description"
              value={editingProduct.description}
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  description: e.target.value,
                })
              }
              style={styles.input}
            />
            <input
              type="number"
              placeholder="Quantity"
              value={editingProduct.availableQuantity}
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  availableQuantity: e.target.value,
                })
              }
              style={styles.input}
            />
            <input
  type="date"
  placeholder="Validity"
  value={editingProduct.productValidity}
  onChange={(e) =>
    setEditingProduct({
      ...editingProduct,
      productValidity: e.target.value,
    })
  }
  style={styles.input}
/>
            <input
              type="text"
              placeholder="Image URL"
              value={editingProduct.image}
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  image: e.target.value,
                })
              }
              style={styles.input}
            />
            <button onClick={updateProduct} style={styles.button}>
              Update
            </button>
          </>
        ) : (
          // Add Product Form
          <>
            <h2 style={styles.formHeader}>Add Product</h2>
            <input
              type="text"
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              style={styles.input}
            />
            <input
              type="number"
              placeholder="Quantity"
              value={newProduct.availableQuantity}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  availableQuantity: e.target.value,
                })
              }
              style={styles.input}
            />
           <input
  type="date"
  placeholder="Validity"
  value={newProduct.productValidity}
  onChange={(e) =>
    setNewProduct({
      ...newProduct,
      productValidity: e.target.value,
    })
  }
  style={styles.input}
/>
             
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              style={styles.input}
            />
            <button onClick={addProduct} style={styles.button}>
              Add
            </button>
          </>
        )}
      </div>
      <br></br>
   

      {/* Product List */}
      <h1 style={styles.header}>Product List</h1>
      <br></br>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.productId} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h2 style={styles.productName}>{product.name}</h2>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.info}>Quantity: {product.availableQuantity}</p>
            <p style={styles.info}>
              Valid Till: {product.productValidity || "N/A"}
            </p>
            <button
  style={{ ...styles.button, marginRight: '20px' }}
  onClick={() => setEditingProduct(product)}
>
  Edit
</button>
<button
  style={{...styles.button, marginLeft: '20px' , backgroundColor: 'red'}}
  onClick={() => deleteProduct(product.productId)}
>
  Delete
</button>

          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    marginTop: "40px",
  },
  header: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "white",
  },
  form: {
    backgroundColor: "#fff",
    borderRadius: "25px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "5px",
    marginBottom: "30px",
    maxWidth: "500px",
    margin: "0 auto", // Center the form
    height: "450px",
  },
  formHeader: {
    fontSize: "1.8rem",
    marginBottom: "10px",
    color: "#333",
  },
  input: {
    width: "90%",
    margin: "10px 0",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  lastButton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "15px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  productName: {
    fontSize: "1.5rem",
    margin: "10px 0",
    color: "#333",
  },
  price: {
    fontSize: "1.2rem",
    color: "#4CAF50",
  },
  description: {
    fontSize: "1rem",
    color: "green",
    margin: "5px 0",
  },
  info: {
    fontSize: "0.9rem",
    color: "#777",
    margin: "2px 0",
  },
};

export default ProductList;