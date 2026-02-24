import React from 'react'

const Contact = () => {
  return (
   <div><section id="contact" className="py-5 mt-5">
    <div className="container">
      <h2 className="fw-bold text-center mb-4">Get in Touch</h2>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="glass-card">
            <form>
              <input className="form-control mb-3" placeholder="Your Name" />
              <input className="form-control mb-3" placeholder="Email Address" />
              <textarea className="form-control mb-3" rows={4} placeholder="Message" defaultValue={""} />
              <button className="btn btn-accent w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section></div>

  )
}

export default Contact