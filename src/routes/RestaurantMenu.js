import React, { useState } from "react"
import '../css/Menu.css';
import { useHistory, useParams } from 'react-router-dom'



function RestaurantMenu(props){
   
  const [count, greeting] = useState("Hello");
  let { id } = useParams();

    // async componentDidMount(){
    //   // const response=await fetch('https://8jygdy9ae3.execute-api.ap-southeast-1.amazonaws.com/dev/restaurant/100')
    //   // const body=await response.json();
    //   // this.setState({menuItems:body})
    //   // console.log(response)
    //   console.log(this.state.hello)
    //  // console.log("React: "+JSON.stringify(this.props))
    // }

    return(
            <div className="container">
                 
<h1>{id}</h1>

            <div class="row text-center">
                <h2>MENU</h2>
                <p>Select from our fresh meals as per your taste buds</p>
            </div>
            <div id="allBurger" class="tab-pane fade in active text-center">
                 <div class=" col-md-4 col-xs-6 img-container-lg" >
              <div class="row" >
                <img src="./images/salad.jpg" class="img-lg"/>
              </div>
              <div class="row padding-description">
              <div class="item-desc " align="left">
                <div>
                  
                    <img class="veg-mark" align="right" width="20px" src='./images/veg-mark.png'/>
                  
                    <h4>Salad</h4>
              </div>
                
                <hr class="hr-divider"/>
                <div class="clearfix menu-item-bottom">
                  <span class="cost">&#8377;</span><span>287</span>
                  <span ><button class="btn btn-xs green-button pull-right" align="right" data-toggle="modal" data-obj-id="1" data-target="#myModal">
                      Add to cart</button></span>
                </div>

                </div>
                </div>
                  </div>
            </div>
            </div>

        )
    }



export default RestaurantMenu;
{/* /* <div id="allBurger" class="tab-pane fade in active text-center">
            {{# each allBurger}}
              <div class=" col-md-4 col-xs-6 img-container-lg" >
              <div class="row" >
                <img src="./images/{{this.ImageUrl}}" class="img-lg"/>
              </div>
              <div class="row padding-description">
              <div class="item-desc " align="left">
                <div>
                  {{#if this.Veg}}
                    <img class="veg-mark" align="right" width="20px" src="./images/veg-mark.png"/>
                  {{else}}
                    <img class="non-veg-mark" align="right"  src="./images/non-veg-mark.png"/>
                  {{/if}}
                    <h4>{{this.ProductName}}</h4>
              </div>
                
                <hr class="hr-divider"/>
                <div class="clearfix menu-item-bottom">
                  <span class="cost">&#8377;</span><span>{{this.PriceDisplay}}</span>
                  <span ><button class="btn btn-xs green-button pull-right" align="right" data-toggle="modal" data-obj-id={{this._id}} data-target="#myModal">
                      Add to cart</button></span>
                </div>

                </div>
                </div>
                  </div> */
                
                  //<img src="./images/burger2.jpg"/>
                }
                 