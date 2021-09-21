  
import React from 'react';
import './App.css';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane';
import ShipCard from './components/ShipCard'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      ships: null
    };
  }

componentDidMount(){
  this.fetchShips()
}

fetchShips(){
  return fetch("https://safe-gorge-11585.herokuapp.com/ships")
  .then(function(response) {
    return response.json();
    })
  .then(data => {

   this.setState({
    isLoaded: true,
    ships: data
    })
    console.log(this.state)
  })  
  .catch(function(error) {
    console.log(error.message)
  })

  
}

  render() {
    return (
      

      <SplitPane split="horizontal">
       <Pane initialSize="50px">
        <>
          <h1>Battle, Ships! 2</h1>
        </>
        </Pane>
        <Pane initialSize="500px">
          <div class='top'>This is a pane in a fragment
          <ShipCard />

          </div>
        </Pane>
          
        <Pane initialSize="800px">
           <div class='bottom'>This is a pane in a fragment
      
           </div>
        
        </Pane>
      </SplitPane>
     );
   }
 }

export default App;
