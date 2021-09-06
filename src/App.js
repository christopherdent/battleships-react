  
import React from 'react';

import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane';


class App extends React.Component {

  render() {
    return (
      

      <SplitPane split="vertical">
          <Pane>
            <>This is a pane in a fragment
            </>
          </Pane>
          
          <Pane>
        
            <>This is a pane in a fragment
        
            </>
        
          </Pane>
          
          
          
          
          
        </SplitPane>
     );
   }
 }

export default App;
