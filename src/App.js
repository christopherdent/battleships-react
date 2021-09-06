  
import React from 'react';
import './App.css';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane';


class App extends React.Component {

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
          
          <Pane initialSize="500px">
        
            <div class='bottom'>This is a pane in a fragment
        
            </div>
        
          </Pane>
          
          
          
          
          
        </SplitPane>
     );
   }
 }

export default App;
