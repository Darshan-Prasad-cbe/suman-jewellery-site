export default function Offers() {
  return (
    <section className="offers-section py-5 text-white">
      <div className="container">
        <h2 className="section-title">Special Offers</h2>
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <div className="offer-card shadow">
              <img src="https://i.ibb.co/fF5Rvyz/chain4.jpg" alt="Offer" className="img-fluid"/>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="gold-text">Buy 1 Get 1 Free 🎉</h3>
            <p>This festive season, celebrate elegance with our exclusive jewellery offer.</p>
            <p>Buy one premium ornament and get another absolutely free. Don’t miss the chance to add sparkle to your collection!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
