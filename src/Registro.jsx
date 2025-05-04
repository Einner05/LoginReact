import { useEffect, useState } from 'react'
import './App.css'


function Registro() {

  const [usuarioRegistro, setUsuarioRegistro] = useState('')
  const [claveRegistro,setClaveRegistro]= useState('')


  function cambiarUsuarioRegistro(evento) {
    setUsuarioRegistro(evento.target.value)
  }
  function cambiarClaveRegistro(evento) {
    setClaveRegistro(evento.target.value)
  }


  async function registrar() {
    const peticion=await fetch('http://localhost:3000/registro?usuario='+usuarioRegistro+'&claveRegistro='+claveRegistro,{credentials:'include'})
    if(peticion.ok){
      alert("Usuario registrado")
      setLogueado(true)
      obtenerUsuario();
    }else{
      alert('Usuario no registrado')
    }
  }

  useEffect(()=>{
  },[])

  return (
    <>
    <h1>Registro</h1>
    <input placeholder='Usuario' type='text'name='usuario' id='usuario' value={usuarioRegistro} onChange={cambiarUsuarioRegistro}/>
    <input placeholder='Clave'type='password'name='clave' id='clave'value={claveRegistro}onChange={cambiarClaveRegistro}/>
    <button onClick={registrar}>Registrar</button>
    </>
  )
}
export default Registro
