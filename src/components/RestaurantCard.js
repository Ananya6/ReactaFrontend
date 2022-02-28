import React, {Component} from "react"


class RestaurantCard extends Component{
    state={}

    render(){
        return(
        <div class="row justify-content-center" >
        
            <div class=" col-md-4 col-sm-6 img-container-lg" >
                <div class="row">
                <img src="./images/rest1.jpg" class="img-lg"/>
                </div>
            <div class="row pad-category" >
                <div class="category ">
                    <p class="justify-content-center">ABC's Kitchen</p>
                <button type="btn butns btn-small spac">Order</button>
                </div>
            </div>
            </div>

            <div class=" col-md-4 col-sm-6 img-container-lg" >
                <div class="row">
                <img src="./images/rest2.jpg" class="img-lg"/>
                </div>
            <div class="row pad-category" >
                <div class="category ">
                <button type="btn butns btn-small spac">Order</button>
                </div>
            </div>
            </div>

            <div class=" col-md-4 col-sm-6 img-container-lg" >
                <div class="row">
                <img src="./images/rest3.jpg" class="img-lg"/>
            </div>
            <div class="row pad-category" >
            <div class="category ">
            <button type="btn butns btn-small spac">Order</button>
            </div>
            </div>
            </div>
      
      
      </div>
        )
    }

}

export default RestaurantCard