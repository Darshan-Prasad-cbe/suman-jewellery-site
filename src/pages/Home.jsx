import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
      <div className="overlay"></div>
      <h1 className="hero-title gold-text">Suman Jewellery</h1>
      <p className="hero-subtitle">✨ Shine with Timeless Elegance ✨</p>
      <div className="d-flex gap-3 mb-5">
        <Link to="/contact" className="btn btn-gold">Contact</Link>
        <Link to="/products" className="btn btn-outline-gold">Products</Link>
      </div>
      <div className="home-description px-3">
        <p>Welcome to <span className="gold-text">Suman Jewellery</span>, where craftsmanship meets luxury.</p>
        <p>Our collection of premium chains, necklaces, and bracelets is designed to make you shine on every occasion.</p>
        <p>Experience timeless elegance and modern sophistication with our exclusive jewellery.</p>
      </div>
    </section>
  );
}
