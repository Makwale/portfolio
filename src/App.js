import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Header from './components/Header';
import { Component } from 'react';
import Summary from './components/Summary';
import Stacks from './components/Stacks';
import Projects from './components/Projects';

import aos from 'aos'

// class App extends Component {

//   constructor(){
//     super()

//   }

//   render(){
//     return (
//       <div  >
//          {/* <Header/> */}
//           sddsfdsfdsfsdfdsfdsdfsf
//           {/* <Intro /> */}
//           <h1 >Hello world</h1>
//           sffsdfd
         
//           {/* <Summary />
//           <Stacks/>
//           <Projects/> */}
//       </div>
     
//     );
//   }
  

// }

function App(){

  return (
          <div  >
             <Header/>
              
              <Intro />
              
              <Summary  />
        
              <Stacks/>
              
              <Projects/>
          </div>
         
  );
  
}

export default App;
