import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import jewel1 from '../assets/jewel (1).jpg';
const categories = [
  {
    name: "Chains",
    images: [
      jewel1
      "https://i.ibb.co/W0bZmTx/chain2.jpg",
      "https://i.ibb.co/0JXZpbb/chain3.jpg",
      "https://i.ibb.co/fF5Rvyz/chain4.jpg",
      "https://i.ibb.co/34M0qD0/chain5.jpg",
      "https://i.ibb.co/q0M91Qb/chain6.jpg",
      "https://i.ibb.co/vHVkYrS/chain7.jpg",
      "https://i.ibb.co/hYBY3F2/chain8.jpg",
      "https://i.ibb.co/xYg0mW2/chain9.jpg"
    ]
  },
  {
    name: "Necklaces",
    images: [
      "https://i.ibb.co/Z1c5R3V/chain1.jpg",
      "https://i.ibb.co/W0bZmTx/chain2.jpg",
      "https://i.ibb.co/0JXZpbb/chain3.jpg",
      "https://i.ibb.co/fF5Rvyz/chain4.jpg",
      "https://i.ibb.co/34M0qD0/chain5.jpg",
      "https://i.ibb.co/q0M91Qb/chain6.jpg",
      "https://i.ibb.co/vHVkYrS/chain7.jpg",
      "https://i.ibb.co/hYBY3F2/chain8.jpg",
      "https://i.ibb.co/xYg0mW2/chain9.jpg"
    ]
  },
  {
    name: "Bracelets",
    images: [
      "https://i.ibb.co/Z1c5R3V/chain1.jpg",
      "https://i.ibb.co/W0bZmTx/chain2.jpg",
      "https://i.ibb.co/0JXZpbb/chain3.jpg",
      "https://i.ibb.co/fF5Rvyz/chain4.jpg",
      "https://i.ibb.co/34M0qD0/chain5.jpg",
      "https://i.ibb.co/q0M91Qb/chain6.jpg",
      "https://i.ibb.co/vHVkYrS/chain7.jpg",
      "https://i.ibb.co/hYBY3F2/chain8.jpg",
      "https://i.ibb.co/xYg0mW2/chain9.jpg"
    ]
  }
];

export default function Products() {
  const [modalData, setModalData] = useState({open:false,img:'',desc:''});

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const openModal = (img, desc) => {
    setModalData({open:true,img,desc});
  }

  const closeModal = () => setModalData({open:false,img:'',desc:''});

  return (
    <section className="products-section py-5 text-white">
      <div className="container">
        <h2 className="section-title">Our Premium Collection</h2>

        {categories.map((cat,i)=>(
          <div key={i} className="mb-5">
            <h3 className="gold-text mb-3">{cat.name}</h3>
            <Slider {...settings} className="product-carousel">
              {cat.images.map((img, idx)=>(
                <div key={idx} className="p-2">
                  <div className="product-card shadow" onClick={()=>openModal(img, `Design ${idx+1} - ${cat.name}`)}>
                    <img src={img} alt={cat.name} className="img-fluid"/>
                    <p className="text-center mt-2">Design {idx+1}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}

        {/* Modal */}
        {modalData.open && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e=>e.stopPropagation()}>
              <img src={modalData.img} alt="Product" className="modal-image"/>
              <p className="text-center mt-2 gold-text">{modalData.desc}</p>
              <button className="btn btn-outline-gold mt-3" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
