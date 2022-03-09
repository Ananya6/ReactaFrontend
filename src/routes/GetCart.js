import React, { useState, useEffect } from "react"
import Amplify, { API } from 'aws-amplify';
import "../css/ShoppingCart.css"
import { useNavigate } from "react-router-dom";


export default function GetCart(){
 const [cart, setCart]=useState({"Cart":"Just initialising"})
    const [cartDom, createCartDom]=useState();
    let navigate = useNavigate();

  useEffect(() => {
    callCartApi()
  },[]);

  

   async function callCartApi(){
    const apiName = 'apigwserverless';
          const path = '/dev/getcart'; 
          const myInit = { // OPTIONAL
              headers: {"user-id":"Anangyugya1"}, // OPTIONAL
             // response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
          };

        await API
          .get(apiName, path, myInit)
          .then(response => {
            console.log("cart api response got")
            var response_cart=response.body
            console.log(response_cart)
             setCart(response_cart)
            
          })
          .catch(error => {
            console.log(error.response);
        });
        
        
  }
  
  function RenderDom(){
      console.log("In render DOM")
    if(cart==null){
        return(<div className="row row-padding text-center">
               <h3>There are no products in the cart</h3>
                <div className="row-padding">
                     <button type="button" className=" btn-success butns " onClick={()=>navigate("/home", { replace: true })} >GO BACK</button>
                 </div>
              </div>
        )
    }else{
        var item_ids = [];
       
        for (var k in cart.FoodItems) {item_ids.push(k);
        console.log(cart.FoodItems[k].name)
        };
        
         
        var cart_items=item_ids.map(id=>
            <div className="row row-padding">

            {/* <div className="col-xs-5 cart-img-container">
                <img src={`../images/${cart.FoodItems[id].ImageUrl}`} className="cart-img" />
             </div>  */}
             {/*  */}
 
             <div className="col-xs-7">
               <h4><b>{cart.FoodItems[id].name}</b></h4>
                 <div className="input-group inputdiv">
               <div className="input-group-btn">
                 <button type="button" className="minus"  data-type="minus" data-field="">
                     <span className="cart-buttons">-</span>
                 </button>
               </div>
               <input className="text-center" value={cart.FoodItems[id].qty} width="80px" type="number" id="quantity-${index}" name="quantity" min="0" max="10" />
               <div className="input-group-btn">
                   <button type="button" className=" plus"  data-type="plus" data-field="">
                   <span className="cart-buttons">+</span>
                   </button>
               </div>
               </div>
                <div className="margn">Price: <span className="rupees">&#8377;{cart.FoodItems[id].price} </span></div>
              </div> 
              <div className="margn removebutton d-flex align-items-end">
                  <button type="button" className=" remove" onclick="location.href = '/removeItem/{{this.item._id}}'">REMOVE</button>
                </div>
             
            </div>  
        )

        return(
               <div>
               {cart_items} 
               <p className="grey-line"></p>
            <div className="d-flex justify-content-end">
                <h5 className="text-left price"><b>TOTAL: </b></h5><h4 className="rupees">&#8377;{cart.TotalPrice}</h4>
            </div>
            <div className="row text-center">
            {/* onClick={()=>} */}
                <button type="button" className=" btn-success butns " onClick={()=>navigate("/checkout", { replace: true })}>CHECKOUT</button>
            </div>
            </div>
                
        )
        }
  }

  function Testing(){

    console.log("In testing");
    return(
        <h1>ty</h1>
    )
  }
        return(
            <div>
            <div className="row text-center ">
            <h3><b>MY CART</b></h3>

            </div>
            <p className="grey-line"></p>
            <RenderDom />

            </div>
            
        
        )

        }
        //     <div className="row row-padding">
        //     <div className="col-xs-5 cart-img-container">
        //         <img src='/images/{{this.item.ImageUrl}}' className="cart-img" />
        //      </div>

        //      <div className="col-xs-7">
        //        <h4><b>{{this.item.ProductName}}<b></h4>
        //          <div className="input-group inputdiv">
        //        <span className="input-group-btn">
        //          <button type="button" className="minus" style="margin-left:-16px" data-type="minus" data-field="">
        //              <span style="font-size:16px; margin-top:-6px">-</span>
        //          </button>
        //        </span>
        //        <input className="text-center" value={{this.qty}} width="80px" type="number" id="quantity-${index}" name="quantity" min="0" max="10" />
        //        <span className="input-group-btn">
        //            <button type="button" className=" plus" style="margin-left: 1px" data-type="plus" data-field="">
        //                <span style="font-size:16px; margin-top:-5px">+</span>
        //            </button>
        //        </span>
        //        </div>
        //         <p className="margn">Price: <span className="rupees">&#8377;{{this.price}}</span> </p>
              
        //        <div className="margn removebutton d-flex align-items-end">
        //            <button type="button" className=" remove" onclick="location.href = '/removeItem/{{this.item._id}}'">REMOVE</button>
        //        </div>
        //    </div>
        //   </div>

        //     <p className="grey-line"></p>
        //     <div className="d-flex justify-content-end">
        //         <h5 className="text-left price"><b>TOTAL: </b></h5><h4 className="rupees">&#8377;{{totPrice}}</h4>
        //     </div>
        //     <div className="row text-center">
        //         <button type="button" className=" btn-success butns " ><a href="/checkout">CHECKOUT</a></button>
        //     </div>
        //     </div>
        
     
   
 


//   <div className="row text-center ">
//           <h3><b>MY CART</b></h3>

//         </div>
//           <p className="grey-line"></p>
   
/*
//     <div className="modal " id="CartModal" data-keyboard="false" data-backdrop="static">
//      <div className="modal-dialog modal-lg">
//       <div className="modal-content">
//            <div className="cart-border">
//        <div className="modal-body content-padding">

//         <div className="row text-center ">
//           <h3><b>MY CART</b></h3>

//         </div>
//           <p className="grey-line"></p>*/

//           {
//             <div className="row row-padding">
//               <div className="col-xs-5 cart-img-container">
//                   <img src='/images/{{this.item.ImageUrl}}' className="cart-img" />
//                </div>

//                <div className="col-xs-7">
//                  <h4><b>{{this.item.ProductName}}<b></h4>
//                    <div className="input-group inputdiv">
//                  <span className="input-group-btn">
//                    <button type="button" className="minus" style="margin-left:-16px" data-type="minus" data-field="">
//                        <span style="font-size:16px; margin-top:-6px">-</span>
//                    </button>
//                  </span>
//                  <input className="text-center" value={{this.qty}} width="80px" type="number" id="quantity-${index}" name="quantity" min="0" max="10" />
//                  <span className="input-group-btn">
//                      <button type="button" className=" plus" style="margin-left: 1px" data-type="plus" data-field="">
//                          <span style="font-size:16px; margin-top:-5px">+</span>
//                      </button>
//                  </span>
//                  </div>
//                   <p className="margn">Price: <span className="rupees">&#8377;{{this.price}}</span> </p>
                
//                  <div className="margn removebutton d-flex align-items-end">
//                      <button type="button" className=" remove" onclick="location.href = '/removeItem/{{this.item._id}}'">REMOVE</button>
//                  </div>
//              </div>
//             </div>

//               <p className="grey-line"></p>
//               <div className="d-flex justify-content-end">
//                   <h5 className="text-left price"><b>TOTAL: </b></h5><h4 className="rupees">&#8377;{{totPrice}}</h4>
//               </div>
//               <div className="row text-center">
//                   <button type="button" className=" btn-success butns " ><a href="/checkout">CHECKOUT</a></button>
//               </div>
          
//            <div className="row row-padding text-center">
//              <h3>There are no products in the cart</h3>
//              <div className="row-padding">
//              <button type="button" className=" btn-success butns " ><a href="/menu">GO BACK</a></button>
//              </div>
//            </div>

//           </div>
//         </div>
//        </div>
//       </div>
//     </div>


// <script type="text/javascript">
//     $(document).ready(function(){
//         $("#CartModal").modal('show');
//     });


//       $(document).ready(function () {


//           addhandler = (index) => {

//               // console.log(index)
//               var quantity = parseInt($(`#quantity-${index}`).val());
//               console.log(quantity);
//               document.getElementById("quant").innerHTML=quantity;
//               // If is not undefined

//               var add = $(`#quantity-${index}`).val(quantity + 1);
//           }

//           subhandler = (index) => {

//               // console.log(index)
//               var quantity = parseInt($(`#quantity-${index}`).val());

//               // If is not undefined
//               if (quantity > 0)
//                   $(`#quantity-${index}`).val(quantity - 1);


//           }

//       });

// </script>


