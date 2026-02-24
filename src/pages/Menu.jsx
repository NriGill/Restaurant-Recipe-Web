import React from 'react'

const Menu = () => {
  return (
    <div>

 <section id="menu" className="py-5 mt-5">
  <div className="container">
    <h2 className="fw-bold mb-4 text-center">Our Signature Menu</h2>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="menu-card">
          <img src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1200&auto=format&fit=crop" className="img-fluid" />
          <div className="p-3">
            <h5>Italian Espresso</h5>
            <p className="muted small">Rich, bold, aromatic</p>
            <strong>₹199</strong>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="menu-card">
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop" className="img-fluid" />
          <div className="p-3">
            <h5>Cheese Burst Pizza</h5>
            <p className="muted small">Handcrafted &amp; oven baked</p>
            <strong>₹499</strong>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="menu-card">
          <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop" className="img-fluid" />
          <div className="p-3">
            <h5>Chocolate Waffle</h5>
            <p className="muted small">Served with maple syrup</p>
            <strong>₹299</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Menu