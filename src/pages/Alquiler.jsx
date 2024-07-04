import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";

const Alquiler = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    // trraigo los datos
    let result = await axios.get("http://localhost:5000/api/");
    // guardo los datos
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    Navigate("/Agregar");
  };
  const handleChange = async(id) => {

    let result = await axios.delete("http://localhost:5000/api/movies/delete/"+id)

    if(result){
      alert("Contacto eliminado correctamente")
      getData()
    }
  };
return (
    <div className="">
      <table className="table-fixed border-separate text-center px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-900">
        <thead>
          <tr>
            <th className="px-6 py-4 border-b border-gray-600 text-sm leading-5 text-gray-900">
              nombre
            </th>
            <th className="px-6 py-4 border-b border-gray-600 text-sm leading-5 text-gray-900">
              genero
            </th>
            <th className="px-6 py-4 border-b border-gray-600 text-sm leading-5 text-gray-900">
              fechaEstreno
            </th>
            <th className="px-6 py-4 border-b border-gray-600 text-sm leading-5 text-gray-900">
              descripcion
            </th>
</tr>
        </thead>
        <tbody>
          {data.map((dato) => (
            <tr key={dato.id}>
              <td className="px-6 py-4 border-b border-r border-gray-600 text-sm leading-5 text-gray-900">
                {dato.nombre}
              </td>
              <td className="px-6 py-4 border-b border-r border-gray-600 text-sm leading-5 text-gray-900">
                {dato.genero}
              </td>
              <td className="px-6 py-4 border-b border-r border-gray-600 text-sm leading-5 text-gray-900">
                {dato.fechaEstreno}
              </td>
              <td className="px-6 py-4 border-b border-r border-gray-600 text-sm leading-5 text-gray-900">
                {dato.descripcion}
              </td>
              <td className="px-6 py-4 border-b border-r border-gray-600 text-sm leading-5 text-gray-900">
                <button>Editar</button>
                <button>Ver</button>
                <button className="" onClick={() => handleChange(dato.id)}>
                  <IoTrashOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="float float-right" onClick={handleClick}>
        Agregar
      </button>
    </div>
  );
};

export default Alquiler;