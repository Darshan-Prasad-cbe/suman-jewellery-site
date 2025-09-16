import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
      <div className="overlay"></div>

      <h1 className="hero-title gold-text">SUMAN JEWELLERY</h1>
      <p className="hero-subtitle">✨ Shine with Timeless Elegance ✨</p>

      <div className="d-flex gap-3 mb-5">
        <Link to="/contact" className="btn btn-gold">Contact</Link>
        <Link to="/products" className="btn btn-outline-gold">Products</Link>
      </div>

      <div className="home-description px-3">
        <p>
          Welcome to <span className="gold-text">Suman Jewellery</span>, where <strong>craftsmanship meets luxury</strong> and every piece tells a story.
        </p>
        <p>
          Discover our exquisite collection of <span className="gold-text">chains, necklaces, bracelets</span>, and rings, designed to make you shine on every occasion.
        </p>
        <p>
          Experience <strong>timeless elegance</strong> and modern sophistication with jewellery that reflects your unique style.
        </p>

        <br />
        <hr />

        <p>
          Visit our store at <span className="gold-glow">25,</span> 11th St, Tatabad, Gandhipuram, Coimbatore — <strong>your golden destination for luxury jewellery</strong>.
        </p>
        <p>
          Stay connected for <span className="gold-text">exclusive offers, lucky draws,</span> and limited edition collections — because elegance is meant to be celebrated. ✨
        </p>
      </div>
    </section>
  );
}
