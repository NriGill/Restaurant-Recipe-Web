import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Myaccount = () => {
  const [user, setuser] = useState({});
  const navigate =useNavigate()
let userid= localStorage.getItem("userid")

  useEffect(() => {
    if(userid){
 fetch('https://dummyjson.com/users/1')
.then(res => res.json())
.then((res)=> setuser(res));

    }else{

      navigate("/login")
    }
    
   
  }, []);


  const Logout=()=>{
    localStorage.removeItem("userid")
    navigate("/")
}
  return (
   <div>
  {/* Bootstrap CSS */}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
  <div className="container my-5 py-5">
    <div className="row justify-content-center">
      <div className="col-lg-9">
        <div className="card shadow border-0">
          <div className="card-header bg-primary text-white text-center">
            <h4 className="mb-0">Welcome back{user.firstName}</h4>
          </div>
          <div className="card-body">
            <div className="row">
              {/* LEFT: Pills Navigation */}
              <div className="col-md-4 mb-3">
                <div className="nav flex-column nav-pills" id="account-pills" role="tablist">
                  <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#profile" type="button">
                    Profile
                  </button>
                  <button className="nav-link" data-bs-toggle="pill" data-bs-target="#orders" type="button">
                    Orders
                  </button>
                  <button className="nav-link" data-bs-toggle="pill" data-bs-target="#address" type="button">
                    Address
                  </button>
                  <button className="nav-link text-danger" data-bs-toggle="pill" data-bs-target="#logout" type="button">
                    Logout
                  </button>
                </div>
              </div>
              {/* RIGHT: Tab Content */}
              <div className="col-md-8">
                <div className="tab-content">
                  {/* Profile Tab */}
                  <div className="tab-pane fade show active" id="profile">
                    <div className="text-center mb-3">
                      <img src="https://via.placeholder.com/120" className="rounded-circle border mb-2" />
                      <h5>John Doe</h5>
                      <p className="text-muted">john@example.com</p>
                    </div>
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Phone</span>
                        <strong>+91 98765 43210</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Joined</span>
                        <strong>2024</strong>
                      </li>
                    </ul>
                  </div>
                  {/* Orders Tab */}
                  <div className="tab-pane fade" id="orders">
                    <h5>Your Orders</h5>
                    <table className="table table-bordered mt-3">
                      <thead className="table-light">
                        <tr>
                          <th>#</th>
                          <th>Product</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Smart Watch</td>
                          <td>
                            <span className="badge bg-success">Delivered</span>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Headphones</td>
                          <td>
                            <span className="badge bg-warning">Pending</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Address Tab */}
                  <div className="tab-pane fade" id="address">
                    <h5>Saved Address</h5>
                    <div className="card mt-3">
                      <div className="card-body">
                        <p className="mb-1"><strong>Home</strong></p>
                        <p className="mb-0 text-muted">
                          New Delhi, India <br />
                          Pin: 110001
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Logout Tab */}
                  <div className="tab-pane fade text-center" id="logout">
                    <h5 className="text-danger">Are you sure?</h5>
                    <p>You want to logout from your account.</p>
                    <button onClick={Logout} className="btn btn-danger">Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Myaccount