import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Recipe = () => {
    const param = useParams()
    const [recipe, setrecipe] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes/" +param.id)
        .then(res=> res.json())
        .then ((res)=> {setrecipe(res)})
        
    }, []);

  return (
    <div>


<div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-lg-10">
      <div className="card shadow-lg border-0">
        <div className="row g-0">
          {/* Recipe Image */}
          <div className="col-md-5">
            <img src={recipe.image} className="img-fluid object-fit-scale rounded-start h-100 w-100" alt="Recipe Image" />
          </div>
          {/* Recipe Content */}
          <div className="col-md-7">
            <div className="card-body p-4">
              <span className="badge bg-warning text-dark mb-2">Chef's Special</span>
              <h2 className="card-title mt-2">{recipe.name}</h2>
              <p className="text-muted">Rich • Creamy • Authentic</p>
              <h5>Instructions</h5>
              <p>
              {recipe.instructions}
              </p>
              <h5>Ingredients</h5>
              <ul className="list-group list-group-flush mb-3">
                {recipe.ingredients?.map((ing)=>(

                <li className="list-group-item">{ing}</li>
                ))}
                
              </ul>
              


<div>
  {/* Rating & Reviews */}
  <div className="d-flex align-items-center mb-3">
    <span className="text-warning me-2 fs-5">
      ★★★★☆
    </span>
    <span className="fw-semibold">{recipe.rating}</span>
    <span className="text-muted ms-2">{Recipe.reviewCount} Reviews</span>
  </div>
  <p className="text-muted">{recipe.mealType}</p>
  <div>
  </div></div>





              <div className="d-flex justify-content-between align-items-center">
            
                <button className="btn btn-warning px-4">Order Now</button>
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

export default Recipe