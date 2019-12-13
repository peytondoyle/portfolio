import React from 'react';
import Becker from "./Work/Becker.js"
import MED from "./Work/MED.js"
import UGroup from "./Work/UGroup.js"

function App() {
  return (
    <header className="App-header">
      <img class="sparkles" src="https://i.imgur.com/l28ys4z.png"></img>
      <h1>Peyton doyle</h1>
      <span class="subhead">
        portfolio coming soon.
      </span>
      <div class="columnContainer">
        <h2>Contact</h2>
          <div class="columnL">
            <a href="mailto:p6doyle@gmail.com">Email</a>
            <br></br>
            <a href="tel:434-941-0738">Phone</a>
          </div>
         <div class="columnR">
           <a href="mailto:p6doyle@gmail.com">Email</a>
           <br></br>
           <a href="tel:434-941-0738">Phone</a>
         </div>
      </div>
    </header>
  );
}

export default App;
