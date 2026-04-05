import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>🌸 MyFlowers — Made with Love 💐</p>
      <p>© {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
}