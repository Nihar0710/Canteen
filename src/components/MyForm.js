import React from "react";
import { useNavigate } from "react-router-dom";

function MyForm() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={styles.wrapper}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div>
          <img
            src={require("../pic1.png")}
            alt="EcoFood Logo"
            style={{ width: "120px", marginBottom: "20px" }}
          />
          <h2 style={{ marginBottom: "30px" }}>Dashboard</h2>

          <div className="sidebar-item">Cart</div>
          <div className="sidebar-item">Past Orders</div>
          <div className="sidebar-item">Track Order</div>
        </div>

        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={styles.pageContainer}>
        <header style={styles.header}>
          <h1 style={styles.logo}>EcoFood Canteen</h1>
          <nav style={styles.navbar}>
            <a href="#home" className="nav-item">Home</a>
            <a href="#menu" className="nav-item">Menu</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#contact" className="nav-item">Contact</a>
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
            <div style={styles.menuCard}>Veg Sandwich (Indian)</div>
            <div style={styles.menuCard}>Fruit Salad</div>
            <div style={styles.menuCard}>Organic Juice</div>
            <div style={styles.menuCard}>Pasta Alfredo (Italian)</div>
            <div style={styles.menuCard}>Tacos (Mexican)</div>
            <div style={styles.menuCard}>Fried Rice (Chinese)</div>
            <div style={styles.menuCard}>Falafel Wrap (Middle Eastern)</div>
            <div style={styles.menuCard}>Sushi Rolls (Japanese)</div>
            <div style={styles.menuCard}>Pad Thai (Thai)</div>
            <div style={styles.menuCard}>Kimchi Bowl (Korean)</div>
          </div>
        </section>

        <footer style={styles.footer}>
          <p>&copy; 2025 EcoFood Canteen. All rights reserved.</p>
        </footer>
      </div>

      {/* Hover styles for navbar and sidebar */}
      <style>
        {`
          .nav-item {
            color: white;
            text-decoration: none;
            font-weight: bold;
            position: relative;
            padding-bottom: 4px;
            transition: color 0.3s ease;
          }

          .nav-item:hover {
            color: rgb(208, 43, 230);
          }

          .nav-item::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            width: 0;
            background-color: rgb(208, 43, 230);
            transition: width 0.3s ease;
          }

          .nav-item:hover::after {
            width: 100%;
          }

          .sidebar-item {
            padding: 10px 0;
            border-bottom: 1px solid #ffffff33;
            cursor: pointer;
            font-weight: bold;
            transition: color 0.3s ease;
          }

          .sidebar-item:hover {
            color:rgb(208, 43, 230);
          }
        `}
      </style>
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
    marginTop: "20px",
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
    flexWrap: "wrap",
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
