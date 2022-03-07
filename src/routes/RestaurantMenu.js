import React, { useState, useEffect } from "react"
import '../css/Menu.css';
import { useParams } from 'react-router-dom'

import Amplify, { API } from 'aws-amplify';

function RestaurantMenu(props){
   
  const [menuItemArr, setMenuArr] = useState([]);
  let { id } = useParams();
  const [menuDom, setMenu]=useState([])
  useEffect(() => {
    connectBackend();
    
  },[]);

  async function connectBackend(){
          const apiName = 'apigwserverless';
          const path = '/dev/restaurant/'+id; 
          const myInit = { // OPTIONAL
              // headers: {}, // OPTIONAL
              response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)

          };

        await API
          .get(apiName, path, myInit)
          .then(response => {
            console.log("Connected ........\n"+apiName+path)
            
            setMenuArr(response.data.Menu)
            console.log(menuItemArr)
          })
          .catch(error => {
            console.log(error.response);
        });

        CreateItem()
  }

  

  function CreateItem(){
    console.log("Creating Item")
   var allitems= menuItemArr.map(item =>
    <div class=" col-md-4 col-xs-6 img-container-lg" >
        <div class="row" >
          <img src={`./image/${item.ImageUrl}`} class="img-lg"/>
        </div>
        <div class="row padding-description">
        <div class="item-desc " align="left">
          <div>
            
              <img class="veg-mark" align="right" width="20px" src='./images/veg-mark.png'/>
            
              <h4>{item.ItemName}</h4>
        </div>
          
          <hr class="hr-divider"/>
          <div class="clearfix menu-item-bottom">
            <span class="cost">&#8377;</span><span>{item.Price}</span>
            <span ><button class="btn btn-xs green-button pull-right" align="right" data-toggle="modal" data-obj-id="1" data-target="#myModal">
                Add to cart</button></span>
          </div>

        </div>
         </div>
    </div>)
   setMenu(allitems)

  }

    return(
            <div className="container">
                 

      
            <div class="row text-center">
                <h2>MENU</h2>
                <p>Select from our fresh meals as per your taste buds</p>
            </div>
            <div id="allBurger" class="tab-pane fade in active text-center">
                  {menuDom}
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
                 