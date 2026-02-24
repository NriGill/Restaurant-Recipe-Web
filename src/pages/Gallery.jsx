import React from 'react'

const Gallary = () => {
  return (
    <div>

<section id="gallery" className="py-5 mt-5">
  <div className="container">
    <h2 className="fw-bold mb-4 text-center">Gallery</h2>
    <div className="row g-3">
      <div className="col-md-4"><img className="img-fluid rounded" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop" /></div>
      <div className="col-md-4"><img className="img-fluid rounded" src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop" /></div>
      <div className="col-md-4"><img className="img-fluid rounded" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop" /></div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Gallary