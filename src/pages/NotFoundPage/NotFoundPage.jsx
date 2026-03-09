import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>

      <h2 style={styles.title}>Page Not Found</h2>

      <p style={styles.text}>
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
    backgroundColor: "#f9fafb"
  },
  code: {
    fontSize: "120px",
    margin: "0",
    color: "#2563eb"
  },
  title: {
    fontSize: "32px",
    margin: "10px 0"
  },
  text: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px"
  }
};