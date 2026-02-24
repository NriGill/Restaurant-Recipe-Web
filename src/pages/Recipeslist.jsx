import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Recipeslist = () => {
const [allrecipes, setallrecipes] = useState([]);


useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
    .then (res => res.json())
    .then (res => setallrecipes(res))

}, []);



  return (
    <div>


{allrecipes.map((tag)=>(

  

<div>



        <h5 className='recipelistlink'><Link to= {"/tag/"+tag} className='text-white'>{tag}</Link></h5>

</div>


))}



    </div>
  )
}

export default Recipeslist