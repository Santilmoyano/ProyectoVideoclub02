import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";

const Alquiler = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    // trraigo los datos
    let result = await axios.get("http://localhost:5000/api/");
   // guardo los datos
    setData(result.data)
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
     <table className="table-auto">
  <thead>
    <tr>
      <th>nombre</th>
      <th>genero</th>
      <th>fechaEstreno</th>
      <th>descripcion</th>
      <th>imagen</th>
    </tr>
  </thead>
  <tbody>
    {data.map(dato=><tr key = {dato.id}>
        <td></td>
        <td>{dato.id}</td>
        <td>{dato.nombre}</td>
        <td>{dato.genero}</td>
        <td>{dato.fechaEstreno}</td>
        <td>{dato.descripcio}</td>
        <td><button><IoTrashOutline /></button></td>
    </tr>)}
  </tbody>
</table>
    </div>
  );
};

export default Alquiler;
