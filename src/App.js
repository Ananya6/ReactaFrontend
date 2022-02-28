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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <Footer />
    // </div>
  )
}
}

export default App;
