import React, { useEffect, useState } from "react";
import "./styles.scss";

const tarots_json = require("./tarots.json");
var shuffle = require("shuffle-array"),
  collection = tarots_json;

shuffle(collection);
// console.log(collection);

// console.log(tarots_json.slice(tarots_json.length - 3));
const tarots = tarots_json.slice(tarots_json.length - 3);
// import tarot1 from "./tarot1.jpg";

// references
// flame: https://codepen.io/dazulu/pen/fGFyj
//https://freefrontend.com/css-snow-effects/

// const url = "https://pokeres.bastionbot.org/images/pokemon";
// const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/00";

export default function App() {
  // const [openedCard, setOpenedCard] = useState([]);
  const [openedCard, setOpenedCard] = useState([false, false, false, false]);
  // const [matched, setMatched] = useState([]);

  // const pokemons = [
  //   { id: 1, name: "balbasaur" },
  //   { id: 8, name: "wartotle" },
  //   { id: 9, name: "blastoise" },
  //   { id: 6, name: "charizard" },
  // ];

  // const tarots = [
  //   { id: 1, name: "cups" },
  //   { id: 2, name: "wands" },
  //   { id: 3, name: "pentacles" },
  //   // { id: 4, name: "swords" },
  // ];

  //currently there are 4 pokemons but we need the pair

  // const pairOfPokemons = [...pokemons, ...pokemons];

  function flipCard(index) {
    setOpenedCard((prevState) =>
      prevState.map((item, idx) => (idx === index ? !item : item))
    );
    // setOpenedCard((opened) => [...opened, index]);
    // cardFlipStatus[index] = !cardFlipStatus[index];
    // console.log(cardFlipStatus[index]);
  }

  // useEffect(() => {
  //   if (openedCard < 2) return;

  //   const firstMatched = pairOfPokemons[openedCard[0]];
  //   const secondMatched = pairOfPokemons[openedCard[1]];

  //   if (secondMatched && firstMatched.id === secondMatched.id) {
  //     setMatched([...matched, firstMatched.id]);
  //   }

  //   if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  // }, [openedCard]);

  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Open+Sans+Condensed:wght@300&display=swap"
        rel="stylesheet"
      ></link>

      {[...Array(150)].map((e, i) => (
        <div className="snow" key={i}></div>
      ))}

      {/* <div className="wrapper">
          <div className="snow layer1 a"></div>
          <div className="snow layer1"></div>
          <div className="snow layer2 a"></div>
          <div className="snow layer2"></div>
          <div className="snow layer3 a"></div>
          <div className="snow layer3"></div>
          <div className="text-bg"></div>
        </div> */}

      <div className="title-text">Reach for the past...</div>
      {/* <div className="snow"></div> */}
      <div className="content-container">
        <div className="cards">
          {tarots.map((tarot, index) => {
            //lets flip the card

            // let isFlipped = false;

            // if (openedCard.includes(index)) isFlipped = true;
            // if (matched.includes(pokemon.id)) isFlipped = true;
            // console.log(`../public/assets/tarot${pokemon.id}.jpg`);
            let isFlipped = openedCard[index];

            return (
              <div
                className={`tarot-card ${isFlipped ? "flipped" : ""} `}
                key={index}
                onClick={() => flipCard(index)}
              >
                <div className="inner">
                  <div className="front">
                    <img
                      // src={`${tarot1}`}
                      src={`${process.env.PUBLIC_URL}/assets/tarot${tarot.id}.jpg`}
                      // src={`${url}${pokemon.id}.png`}
                      alt={`${tarot.name} ${tarot.id}`}
                      width="200"
                    />
                  </div>
                  <div className="back">
                    <div className="message-box">
                      ~*~ <br /> <br />
                      {tarot.message} <br /> <br />
                      ~*~
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="content-container">
        <div className="flame-container">
          <div class="container">
            <div class="red flame"></div>
            <div class="orange flame"></div>
            <div class="yellow flame"></div>
            <div class="white flame"></div>
            <div class="blue circle"></div>
            <div class="black circle"></div>
          </div>

          <div class="container">
            <div class="red flame"></div>
            <div class="orange flame"></div>
            <div class="yellow flame"></div>
            <div class="white flame"></div>
            <div class="blue circle"></div>
            <div class="black circle"></div>
          </div>
        </div>
      </div>

      <div class="curved-div">
        {/* <img
          src={`${process.env.PUBLIC_URL}/assets/left-foot.png`}
          alt="left foot"
          width="100"
        /> */}
        <svg viewBox="0 0 1440 319">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <footer> Fermentation Tarot</footer>
    </div>
  );
}
