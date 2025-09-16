export default function Contact() {
  return (
    <section className="contact-section py-5 text-white">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="row g-4">
          
          {/* Info Section */}
          <div className="col-md-6 info-section p-4 rounded">
            <h3>Why Suman Jewellery?</h3>
            <p>Trusted by thousands for elegance, purity, and design. Experience jewellery like never before.</p>
            
            <h5>Address:</h5>
            <p>
              <span className="gold-glow">25</span>, 11th St, Tatabad, Gandhipuram, Coimbatore, Tamil Nadu 641012
            </p>
            
            <h5>Phone:</h5>
            <p>0422 352 4999</p>
            
            <h5>Email:</h5>
            <p>info@sumanjewellery.com</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-6 form-section p-4 rounded">
            <form className="shadow p-4 rounded">
              <input type="text" className="form-control mb-3" placeholder="Your Name"/>
              <input type="text" className="form-control mb-3" placeholder="Contact Number"/>
              <input type="email" className="form-control mb-3" placeholder="Email"/>
              <textarea className="form-control mb-3" rows={4} placeholder="Message"></textarea>
              <button className="btn btn-gold w-100">Submit</button>
            </form>
          </div>
        </div>

        {/* Footer with Secret PIN */}
        <hr className="my-4"/>
        <p className="text-center mb-0">
          © Darshan <span className="gold-glow">5</span> 2025
        </p>
      </div>
    </section>
  );
}
