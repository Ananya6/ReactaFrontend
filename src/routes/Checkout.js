import React, { useState, useEffect }  from "react"
import "../css/ShoppingCart.css"
import { useLocation, useParams } from "react-router-dom";
import {Container, Button, Form, FormGroup, Placeholder} from 'react-bootstrap';
import { API } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import { IconAgriculture } from "@aws-amplify/ui-react";

// import FormControl, from 'react-bootstrap/lib/FormControl';

const formState = { addr: '' };

function updateFormState(key, value) {
  formState[key] = value;
}


export default function Checkout(){
    const [inputValue, setInputValue] = useState("")
    const [orderSubmit, setOrderSubmit]=useState(false)
    let navigate = useNavigate();
    const [cart, createCart] = useState({})
    var props=useLocation()
    console.log(props)
    
    useEffect(() => {
        if(props.state===null)
            createCart({
                TotalPrice:988
            })
        else
          createCart(props.state.Cart)
      },[]);

      let handleSubmit = async (e) => {
        e.preventDefault();
        
        // console.log(name)
      }

      async function PlaceOrder(){
    
        console.log("In Place Holder")
    
        //let navigate = useNavigate();
        const apiName = 'apigwserverless'; // replace this with your api name.
        const path = '/dev/checkout'; //replace this with the path you have configured on your API
        const myInit = {
            body: {
                address: inputValue,
                cart: cart
            }, 
        };
    
        await API
        .post(apiName, path, myInit)
        .then(response => {
            console.log(response)
            setInputValue(true)
        })
        .catch(error => {
            console.log(error.response);
        });   
       
    }

    return(<div>

<div className="App">

    <input type="text" onChange={(e) => setInputValue(e.target.value)} ></input>
      <button onClick={PlaceOrder}>search</button>    
      {/* <form onSubmit={PlaceOrder}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
  

        <button type="submit">Create</button>

      </form> */}
    </div>
            
             {/* <Form>
                <FormGroup>
                    <Form.Control placeholder="Addr" onChange={e => updateFormState('addr', e.target.value)} />
                </FormGroup>
                <button className="remove mt-5 py-3 px-5" id="confirm" type="submit" onClick={()=>PlaceOrder(cart)} >CONFIRM ORDER</button>
            </Form> */}
                            {/* <button className="remove mt-5 py-3 px-5" id="confirm" type="submit" onClick={()=>PlaceOrder(cart)} >CONFIRM ORDER</button> */}
            </div>

        // <div className="container">
        // <div className="row">
        //     <div className="col-xs-8 col-xs-offset-2" >
        //     <div className="accordion " id="accordionExample">

        //     <div className="card mb-2">
        //                 <div className="card-header " id="headingOne">
        //                     <h5 className="mb-0 d-flex align-items-center">
        //                         <span className="sno">
        //                             1.
        //                         </span>
        //                         <button className="btn btn-link " type="button" id="orderSummary" data-toggle="collapse" data-target="#collapseSummary" aria-expanded="true" aria-controls="collapseSummary">
        //                           ORDER SUMMARY
        //                         </button>
        //                     </h5>
        //                 </div>
    
        //                     <div className="card-body ">
    
        //                         <div className="summary">
        //                             <div className="form-check justify-content-start align-items-center ">
        //                                 <div className="container">
        //                                     <div className="row justify-content-center">
        //                                         <div className="col-xs-3">
        //                                             <p className="summaryinfo">Total</p>
        //                                             <p className="summaryinfo">CGST + SGST@5%</p>
        //                                             <h4 className="payable">Total Payable</h4>
        //                                         </div>
        //                                         <div className="col-xs-3 ">
        //                                             <p className="summaryinfo" >&#8377;<span id="total" >{cart.TotalPrice}</span></p>
        //                                             <p className="summaryinfo" >&#8377;<span id="tax">{0.05*`${cart.TotalPrice}`}</span> </p>
        //                                             <h4 className="payable" >&#8377;<span id="totalPayable">{cart.TotalPrice+0.05*`${cart.TotalPrice}`}</span></h4>
    
        //                                         </div>
    
        //                                     </div>
                                           
        //                                 </div>
        //                             </div>
        //                         </div>
    
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
    
        //         <div className="accordion " id="accordionExample">
        //             <div className="card mb-2">
        //                 <div className="card-header " id="headingOne">
        //                     <h5 className="mb-0 d-flex align-items-center">
        //                         <span className="sno">
        //                             2.
        //                         </span>
        //                         <button className="btn btn-link " id="pickup" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        //                             ENTER YOUR ADDRESS
        //                         </button>
        //                     </h5>
        //                     {/* <form className="ml-auto form" method="post" action="/checkout"> */}
        //                     <Form>
        //                         <FormGroup>
        //                         <Form.Control placeholder="Addr" onChange={e => updateFormState('addr', e.target.value)} />
        //                         </FormGroup>
        //                         <button className="remove mt-5 py-3 px-5" id="confirm" type="submit" onClick={()=>PlaceOrder(cart)} >CONFIRM ORDER</button>
        //                     </Form>
        //                                         {/* <input id="pickupSelected" name="pickupSelected" type="hidden"/>
        //                                         <input id="timeSelected" name="timeSelected" type="hidden"/>
        //                                         <input id="finalPrice" name="finalPrice" type="hidden"/> */}
                                               
                                         
        //                 </div>
    
                          
        //                 </div>  
    
        //         </div>
    
                   
        //    </div>
        //    </div>
         
   
    )
}


{/*

  <div className="card-body ">
    
                                <div className="Corporate">
                                    <div className="form-check d-flex justify-content-start align-items-center " id="addrForm">
                                       <input className="radio" type="radio" data-toggle="collapse" data-target="#collapseButton1" aria-expanded="true" aria-controls="collapseButton1"
                                          name="exampleRadios"  id="addr1" value="Corporate Name 1" />
                                     Corporate Name 1  </div>
    
                                   <div id="collapseButton1" className="pickup collapse">
                                       <button className="remove py-2 ml-4 my-2">PICK UP FROM HERE</button>
                                   </div>
                                 </div>
    
                                   <div className="Corporate">
                                       <div className="form-check d-flex justify-content-start align-items-center ">
                                           <input className="radio" type="radio" data-toggle="collapse" data-target="#collapseButton2" aria-expanded="true" aria-controls="collapseButton2"
                                             name="exampleRadios"  id="addr2" value=" Corporate Name 2 "/>
                                     Corporate Name 2   </div>
    
                                      <div id="collapseButton2" className="pickup collapse">
                                          <button className="remove py-2 ml-4 my-2">PICK UP FROM HERE</button>
                                      </div>
    
                                    </div>
                                    <div className="Corporate">
                                        <div className="form-check d-flex justify-content-start align-items-center ">
                                            <input className="radio" type="radio" data-toggle="collapse" data-target="#collapseButton3" aria-expanded="true" aria-controls="collapseButton3"
                                              name="exampleRadios"  id="addr3" value=" Corporate Name 3 "/ >
                                       Corporate Name 3   </div>
    
                                       <div id="collapseButton3" className="pickup collapse">
                                           <button className="remove py-2 ml-4 my-2">PICK UP FROM HERE</button>
                                       </div>
    
                                     </div>
    
    
    
                            </div>

<div className="card mb-2" >
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0 d-flex align-items-center">
                                <span className="sno">
                                    2.
                                </span>
                                <button className="btn btn-link " id="time" type="button" data-toggle="collapse" data-target="#collapseTime" aria-expanded="true" aria-controls="collapseTime">
                                    TIME
                                </button>
                            </h5>
                        </div>
    
\                            <div className="card-body ">
    
                                <div className="time">
                                    <div className="form-check d-flex justify-content-start align-items-center " id="timingForm">
                                      <span className="col-xs-4"> <input className="radio" type="radio" name="timing" value="9AM - 11AM" checked />  9AM - 11AM</span>
                                      <span className="col-xs-4">  <input className="radio" type="radio" name="timing" value="11AM - 1AM"/> 11AM - 1PM</span>
                                      <span className="col-xs-4">  <input className="radio" type="radio" name="timing"  value="1AM - 3AM"/>  1AM - 3AM</span>
    
    
    
                                   
                                </div>
                            </div>
                        </div>
                    </div> 
                    */ }