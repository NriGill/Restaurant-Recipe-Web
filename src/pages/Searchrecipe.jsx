import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Recipeslist from './Recipeslist';

const Searchrecipe = () => {

    const [Recipes, setSearchrecipe] = useState([]);
    const param= useParams();

    useEffect(() => {
      fetch('https://dummyjson.com/recipes/search?q='+param.id)
.then(res => res.json())
.then(res => setSearchrecipe(res.recipes));
        
    }, [param.id]);


  return (
    <div className="container py-5 ">
    <div className='row gap-1'>

      <div className='col-2 bg-success'>

<h2>All recipes</h2>
<Recipeslist/>        

      </div>

<div className="col-9 bg-success">
  <div className="row justify-content-center">
        {Recipes.map((item) => (
    <div className="col-md-4 p-2">

<Link to={"/recipewise"}></Link>

<div className="card shadow-lg myrecipiescard border-0 h-100" key={item.id}>
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <span className="badge bg-warning text-dark mb-2">Chef Special</span>
          <h5 className="card-title mt-2">{item.name}</h5>
          <p className="card-text text-muted">
            A rich &amp; creamy North Indian dish made with fresh paneer, butter, and aromatic spices.
          </p>
          <ul className="list-unstyled mb-3">
            <li>⏱️ <strong>Time:</strong> {item.prepTimeMinutes} mins</li>
            <li>🔥 <strong>Calories:</strong>{item.caloriesPerServing} kcal</li>
            <li>🌶️ <strong>Spice Level:</strong> Medium</li>
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-success">₹249</span>
            <Link to={"/recipe/"+item.id} className="btn btn-dark btn-sm">View Recipe</Link>
          </div>
        </div>
      </div>


      
    </div>
        ))}
  </div>
</div>






    </div>
    </div>

  )
}

export default Searchrecipe