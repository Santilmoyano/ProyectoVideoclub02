import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Mainagregar = () => {

    const Navigate = useNavigate()

    const initialState ={
        nombre:"",
        genero:"",
        fechaEstreno:"",
        descripcion:"",
        imagen:"",

    }

    const [datosForm,setDatosForm] =useState (initialState)

    const handleSubmit =async(e) =>{
        e.preventDefault()
        let result = await axios.post("http://localhost:5000/api/movies/create",{
            nombre: datosForm.nombre,
            genero: datosForm.genero,
            fechaEstreno: datosForm.fechaEstreno,
            descripcion: datosForm.descripcion,
            imagen: datosForm.imagen,
        })
if(result){
            alert ("Pelicula agregada correctamente")
            Navigate("/Alquiler")
        }
    }
    //tomo el valor de los input y se los paso a name
    const handleChange =(e) =>{
     setDatosForm({...datosForm,[e.target.name]:e.target.value})
    }

  return (

    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Nombre</label>
            <input type="text" onChange={handleChange} name='nombre'/>

            <label htmlFor="">Genero</label>
            <input type="text" onChange={handleChange} name='genero'/>

            <label htmlFor="">Fecha de Estreno</label>
            <input type="text" onChange={handleChange} name='fechaEstreno'/>

            <label htmlFor="">Descripcion</label>
            <input type="text" onChange={handleChange} name='descripcion'/>

            <label htmlFor="">Imagen</label>
            <input type="text" onChange={handleChange} name='imagen'/>

            <button type='submit'>Agregar</button>
        </form>

    </div>
  )
}

export default Mainagregar