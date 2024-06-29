import React from "react";
import { Carousel } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import intensa from "../assets/GodzillavsKong.jpg";
import dune from "../assets/furiosa.jpg";
import boys from "../assets/dune02.jpg";

const Loginmain = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Se inicio sesion correctamente");
    navigate("/Home");
    e.target.reset();
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="flex flex-row w-screen h-screen">
        <div className="w-1/2 h-75% flex items-center justify-center">
          <Carousel className="rounded shadow-sm">
            <img
              src={intensa}
              alt="image 1"
              className="h-full w-full object-cover object-bottom"
            />
            <img
              src={dune}
              alt="image 2"
              className="h-full w-full object-cover object-center"
            />
            <img
              src={boys}
              alt="image 3"
              className="h-full w-full object-cover object-center"
            />
          </Carousel>
        </div>
        <div class="flex mt-28 mr-60 ml-40 ">
          <form
            onSubmit={handleSubmit}
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w- h-2/3"
          >
            <h3 className="mb-5 font-bold text-2xl font-sans tracking-wide ">
              Iniciar sesion
            </h3>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*****"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline justify-center"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Loginmain;
