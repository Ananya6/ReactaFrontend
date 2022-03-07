import './css/App.css';
import './main.css';

//import './components/Footer'
import Footer from './components/Footer';
import React, {Component} from "react"
import RestaurantCard from './components/RestaurantCard';

class App extends Component {
  state={}
  render() {
    return(
      <div class="container">
        <div class="row text-center mid row-content" >
      <hr />
        <h1>Our Restaurants</h1>
        <p >Order from our new restaurants</p>
        <RestaurantCard/>
        </div>
      </div>
  )
}
}

export default App;
