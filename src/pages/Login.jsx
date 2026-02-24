import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Login = () => {
const [email, setemail] = useState("");
const [pass, setpass] = useState("");
const [msg, setmsg] = useState("");
  const navigate= useNavigate();

  useEffect(() => {
    if(localStorage.getItem("userid")){
      navigate("/profile")
    }else{
      
    }
  }, []);


const handleSubmit = () => {
fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: email,
    password: pass,
    expiresInMins: 30, // optional, defaults to 60
  }),
})
.then(res => res.json())
.then((res) => {
  if(res.message&&res.message=='Invalid credentials'){
    setmsg(res.message)
  }else{
    localStorage.setItem("userid",res.id)
    navigate("/profile")
    
  }
  });
}


  return (
<>
    <div
     
       className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.6), rgba(0, 0, 0, 0.35)), url('https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ width: "100%", maxWidth: "380px", borderRadius: "15px" }}
      >
       

        <h3 className="text-center mb-4 fw-bold">Welcome FoodBurg</h3>

{msg.length>0? <h1 className="alert alert-danger">{msg}</h1>:<></>}
        <div>
          <div className="mb-3"> <input  onChange={(e) => setemail(e.target.value)} type="text"  className="form-control form-control-lg" placeholder="Email address" required/>
        </div>

          <div className="mb-3">
            <input onChange={(e)=>setpass(e.target.value)} type="password" className="form-control form-control-lg"  placeholder="Password"
              required
            />
          </div>

          <button onClick={handleSubmit} className="btn btn-primary btn-lg w-100">
            Login
          </button>
        </div>

        <p className="text-center mt-3 mb-0">
          Don’t have an account?{" "}
          <Link to="/register" className="fw-semibold text-decoration-none">
            Register
          </Link>
        </p>
      </div>
    </div>
  </>
  );
};

export default Login;