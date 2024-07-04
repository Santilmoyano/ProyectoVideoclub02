import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import card1 from '../assets/fallguy02.jpg';
import card2 from '../assets/furiosa.jpg';
import card3 from '../assets/spiderman1.jpg';
import card4 from '../assets/dune02.jpg';
import card5 from '../assets/badboys05.jpg';
import card6 from "../assets/insideout02.jpg";
import card7 from "../assets/interstellar.jpg";
import card8 from "../assets/inception.jpg";
import card9 from "../assets/civil.jpg";
import card10 from "../assets/private.jpg";
import card11 from "../assets/seven.jpg";
import card12 from "../assets/revenant.jpg";
import card13 from "../assets/GodzillavsKong.jpg";
function Peliculas() {

  const [searchTerm, setSearchTerm] = useState('');

  const cards = [
    {
      id: 1,
      title: 'The Fall Guy',
      bool: 'Disponible',
      image: card1,
    },
    {
      id: 2,
      title: 'Furiosa',
      bool: 'Disponible',
      image: card2,
    },
    {
      id: 3,
      title: 'Spiderman',
      bool: 'Disponible',
      image: card3,
    },
    {
      id: 4,
      title: 'Dune 2',
      bool: 'Disponible',
      image: card4,
    },
    {
      id: 5,
      title: 'Bad Boys',
      bool: 'Disponible',
      image: card5,
    },
    {
      id: 6,
      title: "Inside out 2",
      bool: "Disponible",
      image: card6,
    },
    {
      id: 7,
      title: "Interstellar",
      bool: "Disponible",
      image: card7,
    },
    {
      id: 8,
      title: "Inception",
      bool: "Disponible",
      image: card8,
    },
    {
      id: 9,
      title: "Civil war",
      bool: "Disponible",
      image: card9,
    },
    {
      id: 10,
      title: "Saving private Ryan",
      bool: "Disponible",
      image: card10,
    },
    {
      id: 11,
      title: "Seven",
      bool: "Disponible",
      image: card11,
    },
    {
      id: 12,
      title: "The Revenant",
      bool: "Disponible",
      image: card12,
    },
    {
      id: 13,
      title: "Godzilla vs Kong",
      bool: "Disponible",
      image: card13,
    }
  ];
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filtrarCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div class="bg-blue-gray-900">
        <Header searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <div class="flex justify-center items-center text-white my-8 font-bold text-lg ">
          Ultimos Lanzamientos
        </div>
          {filtrarCards.length > 0 ? (
            filtrarCards.map((card, index) => (
              index / 13 === 0 && (
                <div key={index} class="flex flex-wrap justify-center space-x-4">
                  <article key={card.id} class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden p-4 my-2 mx-2 ">
                    <img class="w-full h-80 object-cover mr-4" src={card.image} alt={`${card.title} card1`} />
                    <div class="p-4">
                      <h2 class="font-bold text-lg mb-2 flex justify-center">{card.title}</h2>
                      <p class="text-gray-700 text-base flex justify-center">{card.bool} </p>
                    </div>
                  </article>
                  {filtrarCards[index + 1] && (
                    <article key={card.id} class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden p-4 m-2">
                      <img class="w-full h-80 object-cover" src={filtrarCards[index + 1].image} alt={`${filtrarCards[index + 1].title} card2`} />
                      <div class="p-4">
                        <h2 class="font-bold text-lg mb-2 flex justify-center">{filtrarCards[index + 1].title}</h2>
                        <p class="text-gray-700 text-base flex justify-center">{filtrarCards[index + 1].bool} </p>
                      </div>
                    </article>
                  )}
                  {filtrarCards[index + 2] && (
                    <article key={card.id} class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden p-4 m-2">
                      <img class="w-full h-80 object-cover" src={filtrarCards[index + 2].image} alt={`${filtrarCards[index + 2].title} card3`} />
                      <div class="p-4">
                        <h2 class="font-bold text-lg mb-2 flex justify-center">{filtrarCards[index + 2].title}</h2>
                        <p class="text-gray-700 text-base flex justify-center">{filtrarCards[index + 2].bool} </p>
                      </div>
                    </article>
                  )}
                  {filtrarCards[index + 3] && (
                    <article key={card.id} class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden p-4 m-2">
                      <img class="w-full h-80 object-cover" src={filtrarCards[index + 3].image} alt={`${filtrarCards[index + 3].title} card3`} />
                      <div class="p-4">
                        <h2 class="font-bold text-lg mb-2 flex justify-center">{filtrarCards[index + 3].title}</h2>
                        <p class="text-gray-700 text-base flex justify-center">{filtrarCards[index + 3].bool} </p>
                      </div>
                    </article>
                  )}
                  {filtrarCards[index + 4] && (
                    <article key={card.id} class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden p-4 m-2">
                      <img class="w-full h-80 object-cover" src={filtrarCards[index + 4].image} alt={`${filtrarCards[index + 4].title} card4`} />
                      <div class="p-4">
                        <h2 class="font-bold text-lg mb-2 flex justify-center">{filtrarCards[index + 4].title}</h2>
                        <p class="text-gray-700 text-base flex justify-center">{filtrarCards[index + 4].bool} </p>
                      </div>
                    </article>
                  )}
                {filtrarCards[index + 5] && (
                    <article key={card.id} class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden p-4 m-2">
                      <img class="w-full h-80 object-cover" src={filtrarCards[index + 5].image} alt={`${filtrarCards[index + 5].title} card4`} />
                      <div class="p-4">
                        <h2 class="font-bold text-lg mb-2 flex justify-center">{filtrarCards[index + 5].title}</h2>
                        <p class="text-gray-700 text-base flex justify-center">{filtrarCards[index + 5].bool} </p>
                      </div>
                    </article>
                  )}
                  {filtrarCards[index + 6] && (
                    <article key={card.id} class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden p-4 m-2">
                      <img class="w-full h-80 object-cover" src={filtrarCards[index + 6].image} alt={`${filtrarCards[index + 6].title} card4`} />
                      <div class="p-4">
                        <h2 class="font-bold text-lg mb-2 flex justify-center">{filtrarCards[index + 6].title}</h2>
                        <p class="text-gray-700 text-base flex justify-center">{filtrarCards[index + 6].bool} </p>
                      </div>
                    </article>
                  )}
                  {filtrarCards[index + 7] && (
                    <article key={card.id} class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden p-4 m-2">
                      <img class="w-full h-80 object-cover" src={filtrarCards[index + 7].image} alt={`${filtrarCards[index + 7].title} card4`} />
                      <div class="p-4">
                        <h2 class="font-bold text-lg mb-2 flex justify-center">{filtrarCards[index + 7].title}</h2>
                        <p class="text-gray-700 text-base flex justify-center">{filtrarCards[index + 7].bool} </p>
                      </div>
                    </article>
                  )}
                  {filtrarCards[index + 8] && (
                    <article key={card.id} class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden p-4 m-2">
                      <img class="w-full h-80 object-cover" src={filtrarCards[index + 8].image} alt={`${filtrarCards[index + 8].title} card4`} />
                      <div class="p-4">
                        <h2 class="font-bold text-lg mb-2 flex justify-center">{filtrarCards[index + 8].title}</h2>
                        <p class="text-gray-700 text-base flex justify-center">{filtrarCards[index + 8].bool} </p>
                      </div>
                    </article>
                  )}
                  {filtrarCards[index + 9] && (
                    <article key={card.id} class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden p-4 m-2">
                      <img class="w-full h-80 object-cover" src={filtrarCards[index + 9].image} alt={`${filtrarCards[index + 9].title} card4`} />
                      <div class="p-4">
                        <h2 class="font-bold text-lg mb-2 flex justify-center">{filtrarCards[index + 9].title}</h2>
                        <p class="text-gray-700 text-base flex justify-center">{filtrarCards[index + 9].bool} </p>
                      </div>
                    </article>
                  )}
                  {filtrarCards[index + 10] && (
                    <article key={card.id} class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden p-4 m-2">
                      <img class="w-full h-80 object-cover mx-1" src={filtrarCards[index + 10].image} alt={`${filtrarCards[index + 10].title} card4`} />
                      <div class="p-4">
                        <h2 class="font-bold text-lg mb-2 flex justify-center">{filtrarCards[index + 10].title}</h2>
                        <p class="text-gray-700 text-base flex justify-center">{filtrarCards[index + 10].bool} </p>
                      </div>
                    </article>
                  )}
                  {filtrarCards[index + 11] && (
                    <article key={card.id} class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden p-4 m-2">
                      <img class="w-full h-80 object-cover " src={filtrarCards[index + 11].image} alt={`${filtrarCards[index + 11].title} card4`} />
                      <div class="p-4">
                        <h2 class="font-bold text-lg mb-2 flex justify-center">{filtrarCards[index + 11].title}</h2>
                        <p class="text-gray-700 text-base flex justify-center">{filtrarCards[index + 11].bool} </p>
                      </div>
                    </article>
                  )}
                   {filtrarCards[index + 12] && (
                    <article key={card.id} class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden p-4 m-2">
                      <img class="w-full h-80 object-cover" src={filtrarCards[index + 12].image} alt={`${filtrarCards[index + 12].title} card4`} />
                      <div class="p-4">
                        <h2 class="font-bold text-lg mb-2 flex justify-center">{filtrarCards[index + 12].title}</h2>
                        <p class="text-gray-700 text-base flex justify-center">{filtrarCards[index + 12].bool} </p>
                      </div>
                    </article>
                  )}
                  
                </div>
              )
            ))
          ) : (
            <p class="text-gray-700 text-lg">Ningún resultado encontrado</p>
          )}
          

        
      </div>
      <Footer />
    </>
  )
}

export default Peliculas