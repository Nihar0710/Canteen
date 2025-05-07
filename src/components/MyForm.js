import React from "react";
// import "./App.css";
// import logo from '../pic1.png';

function Myform() {
  return (
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
  );
}

const styles = {
  pageContainer: {
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

export default Myform;
