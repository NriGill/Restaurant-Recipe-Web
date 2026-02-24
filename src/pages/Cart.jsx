import React from 'react'

const Cart = () => {
  return (
    <div>

<div className="container py-5">
  <h2 className="text-center mb-5">🛒 Your Cart</h2>
  <div className="row g-4">
    {/* Cart Items */}
    <div className="col-lg-8">
      {/* Item 1 */}
      <div className="card bg-secondary text-light mb-3">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-3 col-md-2">
              <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" className="img-fluid rounded" />
            </div>
            <div className="col-9 col-md-4">
              <h6 className="mb-1">Cheese Burger</h6>
              <small>₹250</small>
            </div>
            <div className="col-md-3 text-center mt-3 mt-md-0">
              <div className="btn-group">
                <button className="btn btn-outline-light">-</button>
                <button className="btn btn-light text-dark">1</button>
                <button className="btn btn-outline-light">+</button>
              </div>
            </div>
            <div className="col-md-3 text-end mt-3 mt-md-0">
              <h6>₹250</h6>
              <button className="btn btn-sm btn-outline-danger">Remove</button>
            </div>
          </div>
        </div>
      </div>
      {/* Item 2 */}
      <div className="card bg-secondary text-light mb-3">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-3 col-md-2">
              <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" className="img-fluid rounded" />
            </div>
            <div className="col-9 col-md-4">
              <h6 className="mb-1">Pasta Alfredo</h6>
              <small>₹320</small>
            </div>
            <div className="col-md-3 text-center mt-3 mt-md-0">
              <div className="btn-group">
                <button className="btn btn-outline-light">-</button>
                <button className="btn btn-light text-dark">2</button>
                <button className="btn btn-outline-light">+</button>
              </div>
            </div>
            <div className="col-md-3 text-end mt-3 mt-md-0">
              <h6>₹640</h6>
              <button className="btn btn-sm btn-outline-danger">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Order Summary */}
    <div className="col-lg-4">
      <div className="card bg-secondary text-light">
        <div className="card-body">
          <h5 className="mb-4">Order Summary</h5>
          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>₹890</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>Tax (5%)</span>
            <span>₹45</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between mb-4">
            <strong>Total</strong>
            <strong>₹935</strong>
          </div>
          <button className="btn btn-warning w-100">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </div>
</div>




    </div>
  )
}

export default Cart