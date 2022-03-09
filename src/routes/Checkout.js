import React from "react"
import "../css/ShoppingCart.css"



export default function Checkout(props){
    return(
        <div className="container">
        <div className="row">
            <div className="col-xs-8 col-xs-offset-2" >
    
                <div className="accordion " id="accordionExample">
                    <div className="card mb-2">
                        <div className="card-header " id="headingOne">
                            <h5 className="mb-0 d-flex align-items-center">
                                <span className="sno">
                                    1.
                                </span>
                                <button className="btn btn-link " id="pickup" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    PICK UP ADDRESS
                                </button>
                            </h5>
                        </div>
    
                        <div id="collapseOne" className="collapse bdy" aria-labelledby="headingOne" data-parent="#accordionExample">
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
    
                        <div id="collapseTime" className="collapse bdy" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body ">
    
                                <div className="time">
                                    <div className="form-check d-flex justify-content-start align-items-center " id="timingForm">
                                      <span className="col-xs-4"> <input className="radio" type="radio" name="timing" value="9AM - 11AM" checked />  9AM - 11AM</span>
                                      <span className="col-xs-4">  <input className="radio" type="radio" name="timing" value="11AM - 1AM"/> 11AM - 1PM</span>
                                      <span className="col-xs-4">  <input className="radio" type="radio" name="timing"  value="1AM - 3AM"/>  1AM - 3AM</span>
    
    
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="card mb-2">
                        <div className="card-header " id="headingOne">
                            <h5 className="mb-0 d-flex align-items-center">
                                <span className="sno">
                                    3.
                                </span>
                                <button className="btn btn-link " type="button" id="orderSummary" data-toggle="collapse" data-target="#collapseSummary" aria-expanded="true" aria-controls="collapseSummary">
                                  ORDER SUMMARY
                                </button>
                            </h5>
                        </div>
    
                        <div id="collapseSummary" className="collapse bdy" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body ">
    
                                <div className="summary">
                                    <div className="form-check d-flex justify-content-start align-items-center ">
                                        <div className="container">
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-xs-3">
                                                    <p className="summaryinfo">Total</p>
                                                    <p className="summaryinfo">(-) Product Discount</p>
                                                    <p className="summaryinfo">Base Price</p>
                                                    <p className="summaryinfo">CGST + SGST@5%</p>
                                                    <h4 className="payable">Total Payable</h4>
                                                </div>
                                                {/* <div className="col-xs-3 ">
                                                    <p className="summaryinfo" >&#8377;<span id="total" >{{total}}</span></p>
                                                    <p className="summaryinfo" >&#8377;<span id="discount">{{discount}}></span></p>
                                                    <p className="summaryinfo" >&#8377;<span id="base"></span></p>
                                                    <p className="summaryinfo" >&#8377;<span id="tax"></span> </p>
                                                    <h4 className="payable" >&#8377;<span id="totalPayable"></span></h4>
    
                                                </div> */}
    
                                            </div>
                                            <form className="ml-auto form" method="post" action="/checkout">
                                                <input id="pickupSelected" name="pickupSelected" type="hidden"/>
                                                <input id="timeSelected" name="timeSelected" type="hidden"/>
                                                <input id="finalPrice" name="finalPrice" type="hidden"/>
                                                <button className="remove mt-5 py-3 px-5" id="confirm" type="submit"  data-toggle="modal" data-target="#orderModal">CONFIRM ORDER</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                        <div className="modal fade " id="orderModal" role="dialog">
                         <div className="modal-dialog ">
                            <div className="modal-content ">
    
                            <div className="modal-body">
                              <button type="button" className="close" align="right" style="color:black" data-dismiss="modal">&times;</button>
                              <div className="row text-center">
                                <h2>Thank You!</h2>
                                <h3>Your Order has been placed</h3>
                                <label className="green-btn">Have a great day</label>
                              </div>
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