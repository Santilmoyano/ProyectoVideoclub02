import React from "react";
import Cards from "./Cards";
import { Navigate, useNavigate } from "react-router-dom";
import inside from "../assets/insideout02.jpg";
import fall from "../assets/fallguy02.jpg";
import bad from "../assets/badboys05.jpg";
import dune from "../assets/dune02.jpg";
import god from "../assets/GodzillavsKong.jpg";
import inter from "../assets/interstellar.jpg";
import furia from "../assets/furiosa.jpg";
import incep from "../assets/inception.jpg";
import civi from "../assets/civil.jpg";
import privatee from "../assets/private.jpg";
import seven from "../assets/seven.jpg";
import revenant from "../assets/revenant.jpg";

const Main = () => {
  const cardsData = [
    {
      id: 1,
      title: "Inside out 2",
      description: "Descubre todo sobre tus emociones",
      imageUrl: [inside],
    },
    {
      id: 2,
      title: "Fall guy",
      description: "Description for card 2",
      imageUrl: [fall],
    },
    {
      id: 3,
      title: "Bad boys 4",
      description: "Description for card 3",
      imageUrl: [bad],
    },
    {
      id: 4,
      title: "Dune 2",
      description: "Description for card 4",
      imageUrl: [dune],
    },
    {
      id: 5,
      title: "Godzilla vs Kong",
      description: "Description for card 5",
      imageUrl: [god],
    },
    {
      id: 6,
      title: "Interstellar",
      description: "Best movie of all time",
      imageUrl: [inter],
    },
    {
      id: 7,
      title: "Furiosa",
      description: "Description for card 7",
      imageUrl: [furia],
    },
    {
      id: 8,
      title: "Inception",
      description: "Description for card 8",
      imageUrl: [incep],
    },
    {
      id: 9,
      title: "Civil war",
      description: "Description for card 9",
      imageUrl: [civi],
    },
    {
      id: 10,
      title: "Saving private Ryan",
      description: "Description for card 10",
      imageUrl: [privatee],
    },
    {
      id: 11,
      title: "Seven",
      description: "Description for card 11",
      imageUrl: [seven],
    },
    {
      id: 12,
      title: "The Revenant",
      description: "Description for card 12",
      imageUrl: [revenant],
    },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Alquiler");
  };

  return (
    <div>
      <br />
      <h3>Peliculas disponibles</h3>
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 p-4">
        {cardsData.map((card) => (
          <Cards
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <br />
      <br />
      <button onClick={handleClick}>Proceder a pagar</button>
    </div>
  );
};

export default Main;
