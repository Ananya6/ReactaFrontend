import React, {Component} from "react"
import { useNavigate, useHistory } from 'react-router-dom';

function RestaurantCard(){
   

    function HandleClick(event){
        const id=event.target.value
        console.log(id)
       // const navigate = useNavigate();
        /navigate('/restaurant/'+id);
       // history.push(`/restaurant`+id);
    }

    
        return(
        <div className="row justify-content-center" >
        
            <div className=" col-md-4 col-sm-6 img-container-lg" >
                <div className="row">
                <img src="./images/rest1.jpg" className="img-lg"/>
                </div>
            <div className="row pad-category" >
                <div className="category ">
                    <p className="justify-content-center">ABC's Kitchen</p>
                <button type="btn butns btn-small spac" value="100" onClick={HandleClick}>Order</button>
                </div>
            </div>
            </div>

            <div className=" col-md-4 col-sm-6 img-container-lg" >
                <div className="row">
                <img src="./images/rest2.jpg" className="img-lg"/>
                </div>
            <div className="row pad-category" >
                <div className="category ">
                <button type="btn butns btn-small spac" value="101">Order</button>
                </div>
            </div>
            </div>

            <div className=" col-md-4 col-sm-6 img-container-lg" >
                <div className="row">
                <img src="./images/rest3.jpg" className="img-lg"/>
            </div>
            <div className="row pad-category" >
            <div className="category ">
            <button type="btn butns btn-small spac" value="102">Order</button>
            </div>
            </div>
            </div>
      
      
      </div>
        )
    

}

export default RestaurantCard