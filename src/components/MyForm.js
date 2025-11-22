import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyForm() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const handleLogout = () => {
    navigate("/");
  };

  const meals = [
    { id: 1, name: "Paneer Butter Masala", category: "Indian", price: 120, rating: 4.5, time: "25-30 min", isSpecial: true, image: "https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Paneer+Butter+Masala" },
    { id: 2, name: "Butter Chicken", category: "Indian", price: 130, rating: 4.7, time: "25-30 min", isSpecial: true, image: "https://via.placeholder.com/300x200/FFA500/FFFFFF?text=Butter+Chicken" },
    { id: 3, name: "Biryani", category: "Indian", price: 100, rating: 4.4, time: "30-35 min", isSpecial: false, image: "https://via.placeholder.com/300x200/FFD700/000000?text=Biryani" },
    { id: 4, name: "Margherita Pizza", category: "Italian", price: 110, rating: 4.3, time: "20-25 min", isSpecial: false, image: "https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Margherita+Pizza" },
    { id: 5, name: "Pasta Carbonara", category: "Italian", price: 100, rating: 4.2, time: "15-20 min", isSpecial: false, image: "https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Pasta+Carbonara" },
    { id: 6, name: "Veggie Burger", category: "Fast Food", price: 80, rating: 4.0, time: "10-15 min", isSpecial: false, image: "https://via.placeholder.com/300x200/FF8C00/FFFFFF?text=Veggie+Burger" },
    { id: 7, name: "Chicken Burger", category: "Fast Food", price: 90, rating: 4.1, time: "10-15 min", isSpecial: false, image: "https://via.placeholder.com/300x200/A0522D/FFFFFF?text=Chicken+Burger" },
    { id: 8, name: "Greek Salad", category: "Healthy", price: 70, rating: 4.6, time: "5-10 min", isSpecial: false, image: "https://via.placeholder.com/300x200/90EE90/000000?text=Greek+Salad" },
    { id: 9, name: "Grilled Chicken Bowl", category: "Healthy", price: 95, rating: 4.5, time: "15-20 min", isSpecial: false, image: "https://via.placeholder.com/300x200/F0E68C/000000?text=Grilled+Chicken+Bowl" },
    { id: 10, name: "Choco Lava Cake", category: "Desserts", price: 60, rating: 4.8, time: "5 min", isSpecial: false, image: "https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Choco+Lava+Cake" },
  ];

  const categories = ["All", "Indian", "Italian", "Fast Food", "Healthy", "Desserts"];

  const filtered = activeCategory === "All" 
    ? meals 
    : meals.filter(m => m.category === activeCategory);

  const special = meals.filter(m => m.isSpecial);


  return (
    <div style={styles.wrapper}>
      <div style={styles.sidebar}>
        <div>
          <img
            src={require("../Projectlogo.jpg")}
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

      <div style={styles.pageContainer}>
        <header style={styles.header}>
          <nav style={styles.navbar}>
            <a href="#home" className="nav-item">Home</a>
            <a href="#menu" className="nav-item">Menu</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#contact" className="nav-item">Contact</a>
          </nav>
        </header>

        <section style={styles.heroSection}>
          <div style={styles.heroCenter}>
            <h2 style={styles.heroTitle}>Meal Canteen</h2>
            <p style={styles.heroSubtitle}>Fast. Fresh. Affordable. Right from your campus.</p>

            <div style={styles.searchBar}>
              <input
                placeholder="Search meals, cuisines..."
                style={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button style={styles.searchButton}>Search</button>
            </div>
          </div>
        </section>

        <section style={styles.specialsSection}>
          <h2 style={{margin: "0 0 16px"}}>🔥 Today's Specials</h2>
          <div style={styles.specialsGrid}>
            {special.map((meal) => (
              <div key={meal.id} style={styles.specialCard}>
                <div style={styles.specialBadge}>Special</div>
                <img src={meal.image} alt={meal.name} style={styles.mealImage} />
                <h3 style={{margin: "8px 0 4px", fontSize: "14px"}}>{meal.name}</h3>
                <p style={{margin: "4px 0", fontSize: "12px", color: "#666"}}>₹{meal.price}</p>
                <div style={styles.mealFooter}>
                  <span style={{fontSize: "12px"}}>⭐ {meal.rating}</span>
                  <span style={{fontSize: "12px"}}>{meal.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.categoriesSection}>
          <h2 style={{margin: "0 0 16px"}}>Browse Categories</h2>
          <div style={styles.categoryScroll}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  ...styles.categoryButton,
                  backgroundColor: activeCategory === cat ? "#558b2f" : "#fff",
                  color: activeCategory === cat ? "#fff" : "#333",
                  borderColor: activeCategory === cat ? "#558b2f" : "#ddd",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
            //Meals Section
        <section style={styles.mealsSection}>
          <h2 style={{margin: "0 0 16px"}}>
            {activeCategory === "All" ? "All Meals" : activeCategory}
          </h2>
          <div style={styles.mealsGrid}>
            {filtered.map((meal) => (
              <div key={meal.id} style={styles.mealCard}>
                <img src={meal.image} alt={meal.name} style={styles.mealCardImage} />
                <div style={styles.mealCardContent}>
                  <h3 style={{margin: "0 0 4px", fontSize: "15px"}}>{meal.name}</h3>
                  <p style={{margin: "4px 0", fontSize: "13px", color: "#666"}}>{meal.category}</p>
                  <div style={styles.mealCardFooter}>
                    <div>
                      <p style={{margin: "4px 0", fontWeight: "700", color: "#2e4a23"}}>₹{meal.price}</p>
                    </div>
                    <div style={{textAlign: "right", fontSize: "12px"}}>
                      <p style={{margin: "2px 0"}}>⭐ {meal.rating}</p>
                      <p style={{margin: "2px 0", color: "#999"}}>{meal.time}</p>
                    </div>
                  </div>
                  <button style={styles.addButton}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer style={styles.footer}>
          <p>&copy; 2025 EcoFood Canteen. All rights reserved.</p>
        </footer>
      </div>

      
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
            color: #6cb342;
          }

          .nav-item::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            width: 0;
            background-color: #6cb342;
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
            color: #6cb342;
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
    backgroundColor: "#558b2f",
    color: "white",
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  logoutButton: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#000000ff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  pageContainer: {
    flex: 1,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f1f8e9",
  },
  header: {
    backgroundColor: "#558b2f",
    color: "white",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "flex-end",
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
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 40px",
    backgroundColor: "#dcedc8",
  },
  heroCenter: {
    maxWidth: "700px",
    textAlign: "center",
    width: "100%",
  },
  heroTitle: {
    fontSize: "32px",
    margin: "0 0 8px",
    color: "#2e4a23",
    fontWeight: "700",
  },
  heroSubtitle: {
    color: "#558b2f",
    marginBottom: "20px",
    fontSize: "16px",
  },
  searchBar: {
    display: "flex",
    gap: "8px",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    width: "100%",
    maxWidth: "500px",
    padding: "14px 16px",
    borderRadius: "8px",
    border: "1px solid #cfe8c9",
    fontSize: "16px",
  },
  searchButton: {
    padding: "12px 24px",
    backgroundColor: "#558b2f",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  specialsSection: {
    padding: "40px",
    backgroundColor: "#f1f8e9",
  },
  specialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "16px",
  },
  specialCard: {
    background: "#fff",
    borderRadius: "10px",
    padding: "12px",
    position: "relative",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  specialBadge: {
    position: "absolute",
    top: "8px",
    right: "8px",
    background: "#ff6b6b",
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "11px",
    fontWeight: "700",
  },
  mealImage: {
    width: "100%",
    height: "100px",
    borderRadius: "8px",
    objectFit: "cover",
    marginBottom: "8px",
  },
  mealFooter: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "11px",
    marginTop: "6px",
  },
  categoriesSection: {
    padding: "40px",
    backgroundColor: "#e8f5e9",
  },
  categoryScroll: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  categoryButton: {
    padding: "10px 20px",
    borderRadius: "20px",
    border: "2px solid #ddd",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s ease",
  },
  mealsSection: {
    padding: "40px",
    backgroundColor: "#f1f8e9",
  },
  mealsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "18px",
  },
  mealCard: {
    background: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  mealCardImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    display: "block",
  },
  mealCardContent: {
    padding: "12px",
  },
  mealCardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "10px",
  },
  addButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#6cb342",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "13px",
  },
  menuSection: {
    padding: "40px",
    backgroundColor: "#e8f5e9",
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
    backgroundColor: "#558b2f",
    color: "white",
  },
};

export default MyForm;
