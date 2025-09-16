import img1 from '../assets/1.png'

export default function Offers() {
  return (
    <section className="offers-section py-5 text-white">
      <div className="container">
        <h2 className="section-title">Special Offers & Lucky Draw</h2>
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <div className="offer-card shadow">
              <img src={img1} alt="Offer" className="img-fluid offer-img" />
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="gold-text">🎁 Hidden Lucky Draw!</h3>
            <p>We’ve hidden a secret 6-digit PIN somewhere on this website. Each page may contain one or two digits of the PIN.</p>
            <p><strong>Example:</strong> If the secret PIN is <code>123456</code>, you might find:</p>
            <ul>
              <li>Page 1: <code>1</code> and <code>2</code></li>
              <li>Page 2: <code>3</code> and <code>4</code></li>
              <li>Page 3: <code>5</code> and <code>6</code></li>
            </ul>
            <p>Collect all digits in order and send a screenshot of the complete PIN to our WhatsApp.</p>
            <p><strong>Note:</strong> This is a <em>lucky draw</em>, not everyone will win. Winners will be announced on <strong>Aadi Perukku</strong>.</p>
            <p>All participants will receive a special participation gift. The top 3 lucky winners will get an exciting opportunity for trips within India, and depending on our reach, there’s a chance for international flights too! 🌏✈️</p>
            <p>Stay connected for updates and announcements. Best of luck! 🍀</p>
          </div>
        </div>
      </div>
    </section>
  );
}
