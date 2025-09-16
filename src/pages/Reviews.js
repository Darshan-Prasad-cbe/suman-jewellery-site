import { useState } from "react";

export default function Reviews() {
  const [reviews,setReviews] = useState([]);
  const [text,setText] = useState("");
  const [rating,setRating] = useState(5);

  const submitReview = (e)=>{
    e.preventDefault();
    if(text.trim()==="") return;
    setReviews([...reviews,{text,rating}]);
    setText("");
    setRating(5);
  }

  return (
    <section className="reviews-section py-5 text-white">
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>
        <form onSubmit={submitReview} className="mb-5">
          <textarea className="form-control mb-3" rows={3} placeholder="Write your review..." value={text} onChange={e=>setText(e.target.value)}/>
          <select className="form-control mb-3" value={rating} onChange={e=>setRating(Number(e.target.value))}>
            {[5,4,3,2,1].map(r=><option key={r} value={r}>{r} Star{r>1?'s':''}</option>)}
          </select>
          <button className="btn btn-gold">Submit Review</button>
        </form>
        <div className="row g-4">
          {reviews.map((r,i)=>(
            <div key={i} className="col-md-4">
              <div className="review-card shadow p-3">
                <p>{r.text}</p>
                <p className="gold-text">{'★'.repeat(r.rating)+'☆'.repeat(5-r.rating)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
