import React from 'react'

const About = () => {
  return (
    <div>

<section id="about" className="py-5 mt-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <h2 className="fw-bold">About NRI Café</h2>
        <p className="muted">We blend modern café culture with authentic flavors. From handcrafted brews to gourmet plates, every detail is curated for a premium experience.</p>
        <ul className="muted list-unstyled mt-3">
          <li><i className="bi bi-check-circle-fill text-success me-2" /> Fresh ingredients sourced daily</li>
          <li><i className="bi bi-check-circle-fill text-success me-2" /> Premium coffee blends</li>
          <li><i className="bi bi-check-circle-fill text-success me-2" /> Cozy interiors &amp; free Wi-Fi</li>
        </ul>
      </div>
      <div className="col-lg-6">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop" className="img-fluid rounded" />
      </div>
    </div>
  </div>
</section>





    </div>
  )
}

export default About