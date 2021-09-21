  
import React from 'react';
import './App.css';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane';


class App extends React.Component {


componentDidMount(){
  return fetch("https://safe-gorge-11585.herokuapp.com/ships")
  .then(function(response) {
    return response.json();
  })
  .then(json => {
   json.forEach(ship => console.log(ship.name));
    let arr = []
    json.forEach(ship => arr.push(ship))
    this.shuffle(arr)
    // arr.forEach(ship => ShipCard.build(ship))
     
    // spinner.setAttribute('hidden', "");
    // avail.removeAttribute('hidden')
   })
  .catch(function(error) {
    console.log(error.message);
  });
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
