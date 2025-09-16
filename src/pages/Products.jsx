import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import jewel1 from '../assets/jewel (1).jpg';
import jewel2 from '../assets/jewel (2).jpg';
import jewel3 from '../assets/jewel (3).jpg';
import jewel4 from '../assets/jewel (4).jpg';
import jewel5 from '../assets/jewel (5).jpg';
import jewel6 from '../assets/jewel (6).jpg';
import jewel7 from '../assets/jewel (6).jpg';
import jewel8 from '../assets/jewel (8).jpg';
import jewel9 from '../assets/jewel (9).jpg';
import jewel10 from '../assets/jewel (10).jpg';
import jewel11 from '../assets/jewel (11).jpg';
import jewel12 from '../assets/jewel (12).jpg';
import jewel13 from '../assets/jewel (13).jpg';
import jewel14 from '../assets/jewel (14).jpg';
import jewel15 from '../assets/jewel (15).jpg';
import jewel16 from '../assets/jewel (16).jpg';
import jewel17 from '../assets/jewel (17).jpg';
import jewel18 from '../assets/jewel (18).jpg';
import jewel19 from '../assets/jewel (19).jpg';
import jewel20 from '../assets/jewel (20).jpg';
import jewel21 from '../assets/jewel (21).jpg';
import jewel22 from '../assets/jewel (22).jpg';
import jewel23 from '../assets/jewel (23).jpg';
import jewel24 from '../assets/jewel (24).jpg';
import jewel25 from '../assets/jewel (25).jpg';
import jewel26 from '../assets/jewel (26).jpg';
import jewel27 from '../assets/jewel (27).jpg';
const categories = [
  {
    name: "Chains",
    images: [
      jewel1,
      jewel2,
      jewel3,
      jewel4,
      jewel5,
      jewel6,
      jewel7,
      jewel8,
      jewel9,
    ]
  },
  {
    name: "Necklaces",
    images: [
      jewel10,
      jewel11,
      jewel12,
      jewel13,
      jewel14,
      jewel15,
      jewel16,
      jewel17,
      jewel18,
    ]
  },
  {
    name: "Bracelets",
    images: [
     jewel19,
     jewel20,
     jewel21,
     jewel22,
     jewel23,
     jewel24,
     jewel25,
     jewel26,
     jewel27,
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
