  
import React from 'react';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane';


class App extends React.Component {

  render() {
    return (
      

      <SplitPane split="vertical">
          <div>This is a div</div>
          <div>This is a div</div>
          <Pane><div>This is a pane with a div inside.</div></Pane>
      </SplitPane>
     );
   }
 }

export default App;
