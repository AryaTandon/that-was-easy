import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const rootElement = document.getElementById('root')

// const state = {eventCount: 0, username: ''}

// function App() {
//   function handleClick() {
//     setState({eventCount: state.eventCount + 1})
//     alert("that was easy")
//   }

//   // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//   //   setState({username: event.target.value})
//   // }

//   return (
//     <div>
//       <p>There have been {state.eventCount} events.</p>
//       <p>
//         <button onClick={handleClick}>Easy</button>
//       </p>
//       {/* <p>You typed: {state.username}</p>
//       <p>
//         <input onChange={handleChange} />
//       </p> */}
//     </div>
//   )
// }

// const state = {eventCount: 0, username: ''}

// function App() {

//   function setState(newState: { eventCount: number; } | { username: string; } ) {
//     Object.assign(state, newState);
//     renderApp();
//   }

//   return (
//     <div>
//       <p>There have been {state.eventCount} events.</p>
//       <p>
//         <button onClick={() => {setState({eventCount: state.eventCount + 1}); 
//         return (alert("that was easy"))
//         }}>Easy</button>
//       </p>
//     </div>
//   )
// }

// function renderApp() {
//   ReactDOM.render(<App />, document.getElementById('root'))
// }

// renderApp()

// function App() {
//   const [countTruth, setCount] = React.useState(false);
//   const [countOverall, setCountOverall] = React.useState(0);
//   const [countEasy, setCountEasy] = React.useState(0);
//   const [countOk, setCountOk] = React.useState(0);
//   const [countDifficult, setCountDifficult] = React.useState(0);
//   const [countTooDifficult, setCountTooDifficult] = React.useState(0);

//   const difficultyArr = [
//     {
//       i: "easy",
//       color: "green",
//       color2: "red",
//       count: countEasy,
//     }, 
//     {
//       i: "ok",
//       color: "yellow",
//       color2: "orange",
//       count: countOk,
//     }, 
//     {
//       i: "difficult",
//       color: "orange",
//       color2: "yellow",
//       count: countDifficult,
//     },
//     {
//       i: "too difficult",
//       color: "red",
//       color2: "green",
//       count: countTooDifficult
//     }
//   ];

//   const alertCaller = (identity: string) => {
//     setCount(!countTruth)
//     alert(`that was ${identity}`);
//     setCountOverall(countOverall + 1)
//     // difficultyArr.map((i) => [i.color, i.color2] = [i.color2, i.color]);
//     // const diffLabels = ["easy", "ok", "difficult", "too difficult"];
//     let countArr = [countEasy, countOk, countDifficult, countTooDifficult];
//     // for (let n = 0; n <= 3; n++) {
//     //   // Removes smiley from identity
//     //   if (identity == diffLabels[n]+" :)") {
//     //     identity = diffLabels[n];
//     //   }
//     //   // Removes smileys from all the buttons
//     //   if ((difficultyArr[n].i).includes(" :)")) {
//     //     if (difficultyArr[n].i !== identity) {
//     //       difficultyArr[n].i = diffLabels[n];
//     //     }
//     //   }
//     // }
//     // console.log(identity)
//     switch(identity) {
//       case "easy":
//         setCountEasy(countEasy + 1);
//         countArr[0] += 1;
//         break;
//       case "ok":
//         setCountOk(countOk + 1);
//         // countArr[1] += 1;
//         break;
//       case "difficult":
//         setCountDifficult(countDifficult + 1); 
//         // countArr[2] += 1;
//         break;
//       case "too difficult":
//         setCountTooDifficult(countTooDifficult + 1);
//         // countArr[3] += 1;
//         break;
//       }
//     // Adds smiley to button(s) with highest count number
//     for (let n = 0; n <= 3; n++) {
//       if (countArr[n] == Math.max(...countArr)) {
//           difficultyArr[n].i += " :)";
//       }
//     }
//   }
  
//   const alertCaller = (identity: string) => {
//     setCount(!countTruth)
//     alert(`that was ${identity}`);
//     setCountOverall(countOverall + 1)
//     switch(identity) {
//       case "easy":
//         setCountEasy(countEasy + 1);
//         break;
//       case "ok":
//         setCountOk(countOk + 1);
//         break;
//       case "difficult":
//         setCountDifficult(countDifficult + 1); 
//         break;
//       case "too difficult":
//         setCountTooDifficult(countTooDifficult + 1);
//         break;
//       }
//   }

//   // const buttonMaker = ( {i, color} : {i: string, color: string} ) => {
//   //   return ( <button className={`button ${color}`} onClick = {() => 
//   //   alertCaller(i)}>{i}</button> )
//   // }

//   // const buttonMaker = ( {i, color, color2, count} : {i: string, color: string, color2: string, count: number} ) => {
//   //   const all = [countEasy, countOk, countDifficult, countTooDifficult];
//   //   const largest = Math.max(...all);
//   //   return largest === count && largest !== 0 ? 
//   //       <button className={`button ${countTruth?color:color2}`} onClick = {() => 
//   //       alertCaller(i)}>{i} :)</button>
//   //       : <button className={`button ${countTruth?color:color2}`} onClick = {() => 
//   //       alertCaller(i)}>{i}</button> 
//   // }

//   const buttonMaker = ( {i, color, color2, count} : {i: string, color: string, color2: string, count: number} ) => { 
//     return (<button className={`button ${countTruth?color:color2}`} onClick = {() => 
//     alertCaller(i)}>{i}</button>)
//   }


//   const buttons = difficultyArr.map(buttonMaker);

//   return (
//     <div className="widerBox">
//       {buttons}
//       <h1>{`${countTruth}`}</h1>
//       <h1>{`The number of clicks in total is ${countOverall}`}</h1>
//       <h1>{`The number of clicks on Easy is ${countEasy}`}</h1>
//       <h1>{`The number of clicks in OK is ${countOk}`}</h1>
//       <h1>{`The number of clicks in Difficult is ${countDifficult}`}</h1>
//       <h1>{`The number of clicks in Too Difficult is ${countTooDifficult}`}</h1>
//     </div>
//   );
// }

function App() {

  const [countTruth, setCount] = React.useState(false);
  const [countOverall, setCountOverall] = React.useState(0);
  const [countEasy, setCountEasy] = React.useState(0);
  const [countOk, setCountOk] = React.useState(0);
  const [countDifficult, setCountDifficult] = React.useState(0);
  const [countTooDifficult, setCountTooDifficult] = React.useState(0);

  const difficultyArr = [
    {
      i: "easy",
      color: "green",
      color2: "red",
      count: countEasy,
    }, 
    {
      i: "ok",
      color: "yellow",
      color2: "orange",
      count: countOk,
    }, 
    {
      i: "difficult",
      color: "orange",
      color2: "yellow",
      count: countDifficult,
    },
    {
      i: "too difficult",
      color: "red",
      color2: "green",
      count: countTooDifficult
    }
  ];

  const alertCaller = (identity: string) => {
    setCount(!countTruth)
    alert(`that was ${identity}`);
    setCountOverall(countOverall + 1)
    switch(identity) {
      case "easy":
        setCountEasy(countEasy + 1);
        break;
      case "ok":
        setCountOk(countOk + 1);
        break;
      case "difficult":
        setCountDifficult(countDifficult + 1); 
        break;
      case "too difficult":
        setCountTooDifficult(countTooDifficult + 1);
        break;
      }
  }

  // // Post-Exercise 6
  // const buttonMaker = ( {i, color, color2, count} : {i: string, color: string, color2: string, count: number} ) => { 
  //   return (<button className={`button ${countTruth?color:color2}`} onClick = {() => 
  //   alertCaller(i)}>{i}</button>)
  // }

  // Post-Exercise 7
  const buttonMaker = ( {i, color, color2, count} : {i: string, color: string, color2: string, count: number} ) => {
    const all = [countEasy, countOk, countDifficult, countTooDifficult];
    const largest = Math.max(...all);
    return largest === count && largest !== 0 ? 
        <button className={`button ${countTruth?color:color2}`} onClick = {() => 
        alertCaller(i)}>{i} :)</button>
        : <button className={`button ${countTruth?color:color2}`} onClick = {() => 
        alertCaller(i)}>{i}</button> 
  }

  const buttons = difficultyArr.map(buttonMaker);

  return (
    <div className="widerBox">
      {buttons}
      <h1>{`${countTruth}`}</h1>
      <h1>{`The number of clicks in total is ${countOverall}`}</h1>
      <h1>{`The number of clicks on Easy is ${countEasy}`}</h1>
      <h1>{`The number of clicks in OK is ${countOk}`}</h1>
      <h1>{`The number of clicks in Difficult is ${countDifficult}`}</h1>
      <h1>{`The number of clicks in Too Difficult is ${countTooDifficult}`}</h1>
    </div>
  );
}

export default App;
