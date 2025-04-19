import React, { useEffect, useState } from "react";

const Offer = () => {
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({
    name: "",
    description: "",
    availableQuantity: "",
    percentage: "",
    offerValidity: "",
    imageUrl: "", // Added imageUrl field
  });
  const [editingOffer, setEditingOffer] = useState(null);

  const apiUrl = "http://localhost:9098/api/offers";

  // GET Method: Fetch all offers
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setOffers(data))
      .catch((err) => console.error("Fetch error: ", err));
  }, [apiUrl]);

  // POST Method: Add a new offer
  const addOffer = () => {
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOffer),
    })
      .then((res) => res.json())
      .then((data) => {
        setOffers([...offers, data]);
        setNewOffer({
          name: "",
          description: "",
          availableQuantity: "",
          percentage: "",
          offerValidity: "",
          imageUrl: "", // Reset imageUrl
        });
      })
      .catch((err) => console.error("POST error: ", err));
  };

  // PUT Method: Update an existing offer
  const updateOffer = () => {
    if (!editingOffer) return;

    fetch(`${apiUrl}/${editingOffer.offerId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingOffer),
    })
      .then((res) => res.json())
      .then((data) => {
        setOffers(
          offers.map((offer) =>
            offer.offerId === data.offerId ? data : offer
          )
        );
        setEditingOffer(null);
      })
      .catch((err) => console.error("PUT error: ", err));
  };

  // DELETE Method: Delete an offer
  const deleteOffer = (id) => {
    fetch(`${apiUrl}/${id}`, { method: "DELETE" })
      .then(() => {
        setOffers(offers.filter((offer) => offer.offerId !== id));
      })
      .catch((err) => console.error("DELETE error: ", err));
  };

  const styles = {
    container: {
      padding: "20px",
      textAlign: "center",
      marginTop: "100px",
      color: "#333",
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
      padding: "20px",
      marginBottom: "30px",
      maxWidth: "500px",
      margin: "0 auto",
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
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)", // Each row has exactly 5 cards
      gap: "25px", // Adds spacing between cards
      justifyContent: "center",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      padding: "20px",
      textAlign: "center",
      width: "225px", // Fixed width for consistent card sizes
      margin: "0 auto",
    },
    image: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "2px",
    
    },
    offerName: {
      fontSize: "1.5rem",
      margin: "10px 0",
      color: "#333", // Dark gray color for the title
      marginBottom: "10px",
    },
    discount: {
      fontSize: "1rem",
      color: "green", // Green color to represent discounts
      margin: "2px 0",
    },
    description: {
      fontSize: "1.2rem",
      color: "green",
      margin: "5px 0",
    },
    info: {
      fontSize: "0.9rem",
      color: "#777",
      margin: "5px 0",
    },
  };

  return (
    <div style={styles.container}>
      {/* Form Section */}
      <div style={styles.form}>
        <h2>{editingOffer ? "Edit Offer" : "Add Offer"}</h2>
        <input
          type="text"
          placeholder="Name"
          value={editingOffer ? editingOffer.name : newOffer.name}
          onChange={(e) =>
            editingOffer
              ? setEditingOffer({ ...editingOffer, name: e.target.value })
              : setNewOffer({ ...newOffer, name: e.target.value })
          }
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Description"
          value={editingOffer ? editingOffer.description : newOffer.description}
          onChange={(e) =>
            editingOffer
              ? setEditingOffer({ ...editingOffer, description: e.target.value })
              : setNewOffer({ ...newOffer, description: e.target.value })
          }
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Available Quantity"
          value={
            editingOffer
              ? editingOffer.availableQuantity
              : newOffer.availableQuantity
          }
          onChange={(e) =>
            editingOffer
              ? setEditingOffer({ ...editingOffer, availableQuantity: e.target.value })
              : setNewOffer({ ...newOffer, availableQuantity: e.target.value })
          }
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Discount Percentage"
          value={editingOffer ? editingOffer.percentage : newOffer.percentage}
          onChange={(e) =>
            editingOffer
              ? setEditingOffer({ ...editingOffer, percentage: e.target.value })
              : setNewOffer({ ...newOffer, percentage: e.target.value })
          }
          style={styles.input}
        />
        <input
          type="date"
          placeholder="Offer Validity"
          value={editingOffer ? editingOffer.offerValidity : newOffer.offerValidity}
          onChange={(e) =>
            editingOffer
              ? setEditingOffer({ ...editingOffer, offerValidity: e.target.value })
              : setNewOffer({ ...newOffer, offerValidity: e.target.value })
          }
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={editingOffer ? editingOffer.imageUrl : newOffer.imageUrl}
          onChange={(e) =>
            editingOffer
              ? setEditingOffer({ ...editingOffer, imageUrl: e.target.value })
              : setNewOffer({ ...newOffer, imageUrl: e.target.value })
          }
          style={styles.input}
        />
        <button
          onClick={editingOffer ? updateOffer : addOffer}
          style={styles.button}
        >
          {editingOffer ? "Update Offer" : "Add Offer"}
        </button>
      </div>
      <br></br>
      <br></br>
      <h1 style={styles.header}>Available Offers</h1>
      <br></br>
      <div style={styles.grid}>
        {offers.map((offer) => (
          <div key={offer.offerId} style={styles.card}>
            {offer.imageUrl && (
              <img src={offer.imageUrl} alt="Offer" style={styles.image} />
            )}
            <h3 style={styles.offerName}>{offer.name}</h3>
            <p style={styles.description}>{offer.description}</p>
            <p style={styles.info}>Quantity: {offer.availableQuantity}</p>
            <p style={styles.discount}>Discount: {offer.percentage}%</p>
            <p style={styles.info}>
              Valid Till: {offer.offerValidity || "N/A"}
            </p>
            <button
              style={{ ...styles.button, marginRight: "20px" }}
              onClick={() => setEditingOffer(offer)}
            >
              Edit
            </button>
            <button
              style={{ ...styles.button, backgroundColor: "red", marginLeft: "20px" }}
              onClick={() => deleteOffer(offer.offerId)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;