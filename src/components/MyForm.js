import React from "react";
import { useNavigate } from "react-router-dom"; // Make sure you have react-router-dom installed

function MyForm() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic (e.g., clearing session)
    navigate("/"); // Redirect to login page
  };

  return (
    <div style={styles.wrapper}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
      <img
        src={require("../pic1.png")}
        alt="EcoFood Logo"
        style={{ width: "120px", marginBottom: "20px" }}
      />
       <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={styles.pageContainer}>
        <header style={styles.header}>
          <h1 style={styles.logo}>EcoFood Canteen</h1>
          <nav style={styles.navbar}>
            <a href="#home" style={styles.navItem}>Home</a>
            <a href="#menu" style={styles.navItem}>Menu</a>
            <a href="#about" style={styles.navItem}>About</a>
            <a href="#contact" style={styles.navItem}>Contact</a>
          </nav>
        </header>

        <section style={styles.heroSection}>
          <div style={styles.heroText}>
            <h2>Welcome to EcoFood Canteen</h2>
            <p>Healthy. Fresh. Sustainable.</p>
          </div>
          <img
            src={require("../pic1.png")}
            alt="EcoFood"
            style={styles.heroImage}
          />
        </section>

        <section id="menu" style={styles.menuSection}>
          <h2>Our Menu</h2>
          <div style={styles.menuItems}>
            <div style={styles.menuCard}>Veg Sandwich</div>
            <div style={styles.menuCard}>Fruit Salad</div>
            <div style={styles.menuCard}>Organic Juice</div>
          </div>
        </section>

        <footer style={styles.footer}>
          <p>&copy; 2025 EcoFood Canteen. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
  },
  sidebar: {
    width: "220px",
    backgroundColor: "#7b0000",
    color: "white",
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  logoutButton: {
    marginTop: "auto",
    padding: "10px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  pageContainer: {
    flex: 1,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff5f5",
  },
  header: {
    backgroundColor: "#7b0000",
    color: "white",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  navbar: {
    display: "flex",
    gap: "20px",
  },
  navItem: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  heroSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px 40px",
    backgroundColor: "#f8bcbc",
  },
  heroText: {
    maxWidth: "50%",
  },
  heroImage: {
    width: "200px",
  },
  menuSection: {
    padding: "40px",
    backgroundColor: "#ffeaea",
    textAlign: "center",
  },
  menuItems: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  menuCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    minWidth: "150px",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#7b0000",
    color: "white",
  },
};

export default MyForm;
