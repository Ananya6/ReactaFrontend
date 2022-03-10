import React, { useState, useEffect } from "react"
import '../css/Menu.css';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useAuthenticator} from '@aws-amplify/ui-react'
import Amplify, { API } from 'aws-amplify';
import Dummy from "../components/Dummy"
import App from "../App"

// function AddButton(){
//   handleClick = () => {
//     this.props.onHeaderClick(this.props.value);
//   }

//     return (
//       <span ><button className="btn btn-xs green-button pull-right" align="right" onClick={AddToCart} data-toggle="modal" data-obj-id="1" data-target="#myModal">
//                 Add to cart</button></span>
//         {this.props.column}
//       </th>
//     );

// }


// {this.props.defaultColumns.map((column) => (
//   <TableHeader
//     value={column}
//     onHeaderClick={this.handleSort}
//   /
// ))}

// function handleClick(rid, item_id){
//   console.log("Hello"+rid+item_id)


// }


const handleClick= (rid,item_id)=>{
  console.log("In add to cart"+typeof(rid))
  const apiName = 'apigwserverless';
          const path = '/dev/add-to-cart'; 
          const myInit = { // OPTIONAL
              headers: {"user-id":"mytest","restaurant-id":rid,"item-id":item_id}, // OPTIONAL
              response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
          };

         API
          .get(apiName, path, myInit)
          .then(response => {
            console.log("cart api response got")
            console.log(response.data)
            
          })
          .catch(error => {
            console.log(error.response);
        });
}


function RestaurantMenu(props){
   
  const [menuItemArr, setMenuArr] = useState([{"ItemId":12,
  "ItemName": "Veg Burger",
  "Price": 225,
  "Veg": "true",
  "SoldOut": false,
  "ImageUrl": "burger.jpg",
  "RestaurantId": 1}]);
  let { id } = useParams();
  const [fetchMenu, setfetchMenu]=useState("false")
  const [menuDom, setMenu]=useState([])

  useEffect(() => {
     connectBackend();
    
  },[fetchMenu]);

   async function connectBackend(){
          const apiName = 'apigwserverless';
          const path = '/dev/restaurant/'+id; 

          await API
          .get(apiName, path)
          .then(response => {

            console.log("Connected ........\n"+apiName+path)
            setMenuArr(response.Menu)
            setfetchMenu("ft")
            console.log(menuItemArr)
            CreateItem()
            
          })
          .catch(error => {
            console.log(error.response);
        });

  }

  function AddToCartLink(/*item_id, rest_id*/) {
    const { route } = useAuthenticator((context) => [context.route]);
    let v=route === 'authenticated' ? "Auth done":"Not done";
    console.log("Hello"+v)
    return <App />
  }

  function IsVeg(props){
    console.log(props)

    if(props.veg=="true"){
      return <img id={props.id} className="veg-mark" align="right" width="20px" src='../images/veg-mark.png'/>
    }else
     return <img id={props.id} className="non-veg-mark" align="right" width="20px" src='../images/non-veg-mark.png'/>

  }

  function CreateItem(){
    console.log("Creating Item")
    console.log(menuItemArr)
   var allitems= menuItemArr.map(item =>
    <div key={item.ItemId} className=" col-md-4 col-xs-6 img-container-lg" >
        <div className="row" >
          <img src={`../images/${item.ImageUrl}`} className="img-lg"/>
        </div>
        <div className="row padding-description">
        <div className="item-desc " align="left">
          <div>
            <IsVeg veg={item.Veg} id={item.ItemId} />
              <h4>{item.ItemName}</h4>
        </div>
          
          <hr className="hr-divider"/>
          <div className="clearfix menu-item-bottom">
            <span className="cost">&#8377;</span><span>{item.Price}</span>
            <span ><button class="btn btn-xs green-button pull-right" onClick={()=>handleClick(item.RestaurantId,item.ItemId)} align="right" data-toggle="modal" data-obj-id="1" data-target="#myModal">
                      Add to cart</button></span>
          </div>

        </div>
         </div>
    </div>)
   setMenu(allitems)

  }

    return(
            <div className="container">
            <div className="row text-center">
                <h2>MENU</h2>
                <p>Select from our fresh meals as per your taste buds</p>
            </div>
            <div id="allBurger" className="tab-pane fade in active text-center">
                  {menuDom}
            </div>
           
            </div>
            

        )
    }



export default RestaurantMenu;
{/* /* <div id="allBurger" className="tab-pane fade in active text-center">
            {{# each allBurger}}
              <div className=" col-md-4 col-xs-6 img-container-lg" >
              <div className="row" >
                <img src="./images/{{this.ImageUrl}}" className="img-lg"/>
              </div>
              <div className="row padding-description">
              <div className="item-desc " align="left">
                <div>
                  {{#if this.Veg}}
                    <img className="veg-mark" align="right" width="20px" src="./images/veg-mark.png"/>
                  {{else}}
                    <img className="non-veg-mark" align="right"  src="./images/non-veg-mark.png"/>
                  {{/if}}
                    <h4>{{this.ProductName}}</h4>
              </div>
                
                <hr className="hr-divider"/>
                <div className="clearfix menu-item-bottom">
                  <span className="cost">&#8377;</span><span>{{this.PriceDisplay}}</span>
                  <span ><button className="btn btn-xs green-button pull-right" align="right" data-toggle="modal" data-obj-id={{this._id}} data-target="#myModal">
                      Add to cart</button></span>
                </div>

                </div>
                </div>
                  </div> */
                
                  //<img src="./images/burger2.jpg"/>
                }
                 