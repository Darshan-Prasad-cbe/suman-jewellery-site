export default function Contact() {
  return (
    <section className="contact-section py-5 text-white">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <h3>Why Suman Jewellery?</h3>
            <p>Trusted by thousands for elegance, purity, and design. Experience jewellery like never before.</p>
            <h5>Address:</h5><p>123 Main Street, Coimbatore</p>
            <h5>Phone:</h5><p>+91 98765 43210</p>
            <h5>Email:</h5><p>info@sumanjewellery.com</p>
          </div>
          <div className="col-md-6">
            <form className="shadow p-4 rounded">
              <input type="text" className="form-control mb-3" placeholder="Your Name"/>
              <input type="text" className="form-control mb-3" placeholder="Contact Number"/>
              <input type="email" className="form-control mb-3" placeholder="Email"/>
              <textarea className="form-control mb-3" rows={4} placeholder="Message"></textarea>
              <button className="btn btn-gold w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
