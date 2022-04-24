import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ContactCard from "./components/ContactCard";
import Card from "./components/card";
import Jokes from "./components/Jokes";
import imagesData from "./imagesData";
import data from "./data";
import jokesData from "./jokesData";

const Cards = (props) => (
  <div className="cards-list">
    {props.data.map((item) => {
      return <Card key={item.id} {...item} />;
    })}
  </div>
);

const App = () => (
  <React.Fragment>
    <NavBar />
    <Hero />
    <Cards data={data} />
  </React.Fragment>
);

//////////////////////////////////////////////////////
// function App() {
//   return (
//     <React.Fragment>
//       <ContactCard />
//     </React.Fragment>
//   );
// }
//////////////////////////////////////////////////////

// const JokesElment = (props) =>
//   props.jokesData.map((jokk, i) => (
//     <Jokes key={i} setup={jokk.setup} punchline={jokk.punchline} />
//   ));

// function App() {
//   return (
//     <React.Fragment>
//       <JokesElment jokesData={jokesData} />
//     </React.Fragment>
//   );
// }

export default App;
