import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import card1 from '../assets/fallguy.jpg';
import card2 from '../assets/furiosa.jpg';
import card3 from '../assets/GodzillavsKong.jpg';
import card4 from '../assets/spiderman1.jpg';
import card5 from '../assets/dune02.jpg';
import card6 from '../assets/badboys03.jpg';


const Peliculas = () => {

    
  return (
    <>

    <Header/>
    <div class="flex items-center">
    <div class="max-w-full max-h-full rounded container p-4">
  <img class="w-48" src={card1} alt="card1"></img>
  <div class="px-8 py-2 ">
    <div class="font-bold text-lg mb-2">The Fall Guy</div>
  </div>
</div>
<div class="max-w-full max-h-full rounded container mx-auto p-4">
  <img class="w-48" src={card2} alt="card2"></img>
  <div class="px-16 py-2">
    <div class="font-bold text-lg mb-2">Furiosa</div>
  </div>
</div>
<div class="max-w-full max-h-full rounded container mx-auto p-4">
  <img class="w-48" src={card3} alt="card2"></img>
  <div class="px-3 py-2">
    <div class="font-bold text-lg mb-2">Godzilla Vs Kong</div>
  </div>
</div>
<div class="max-w-full max-h-full rounded container mx-auto p-4">
  <img class="w-48" src={card4} alt="card2"></img>
  <div class="px-3 py-2">
    <div class="font-bold text-lg mb-2">Spiderman</div>
  </div>
</div>
<div class="max-w-full max-h-full rounded container mx-auto p-4">
  <img class="w-48" src={card5} alt="card2"></img>
  <div class="px-3 py-2">
    <div class="font-bold text-lg mb-2">Dune</div>
  </div>
</div>
<div class="max-w-full max-h-full rounded container mx-auto p-4">
  <img class="w-48" src={card6} alt="card2"></img>
  <div class="px-3 py-2">
    <div class="font-bold text-lg mb-2">Bad boys 3</div>
  </div>
</div>

</div>
    <Footer/>
    
    </>
  );
};

export default Peliculas;