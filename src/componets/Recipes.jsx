import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Recipes(props) {
    return (
        <div>
            <div className="container ">
                <div className="row m-auto">
                    
{
    props.recipe.map((val)=>{
        return (
            <div className="col-md-4 " key={val.recipe_id}  >
                <div className="card" style={{width:"18rem", marginBottom:"20px"}}>
                <img className="card-img-top " src={val.image_url} className="image-fluid" height="150px"/>
                <div className="card-body">
                <h6 className="card-title">
                    {val.title.length < 20 ? `${val.title} ` : ` ${val.title.substring(0,25)}...`}
                    </h6>
                <p className="card-text">{val.publisher}.</p>
    
                </div>
                </div>
            </div>
        )
    })
}
                    
                </div>
            </div>           
        </div>
    )
}

