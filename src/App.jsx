import { useEffect, useState } from "react";
import "./App.css";
import Usuarios from "./Usuarios";
import Registro from "./Registro";
import Productos from "./Productos"; // ✔️ Ahora este es tu nuevo componente de tabla

function App() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [logueado, setLogueado] = useState(false);
  const [recargar, setRecargar] = useState(false);

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value);
  }

  function cambiarClave(evento) {
    setClave(evento.target.value);
  }

  function recargarAhora() {
    setRecargar(!recargar);
  }

  async function ingresar() {
    const peticion = await fetch(`http://localhost:3000/login?usuario=${usuario}&clave=${clave}`, { credentials: "include" });
    if (peticion.ok) {
      setLogueado(true);
    } else {
      alert("Usuario o clave incorrectos");
    }
  }

  async function validar() {
    const peticion = await fetch("http://localhost:3000/validar", { credentials: "include" });
    if (peticion.ok) {
      setLogueado(true);
    }
  }

  useEffect(() => {
    validar();
  }, []);

  if (logueado) {
    return (
      <>
        <Registro recargarAhora={recargarAhora} />
        <Productos /> {/* ✔️ Ahora aquí va tu tabla de productos */}
        <Usuarios recargar={recargar} />
      </>
    );
  }

  return (
    <>
      <h1>Inicio Sesión</h1>
      <input
        placeholder="Usuario"
        type="text"
        name="usuario"
        id="usuario"
        value={usuario}
        onChange={cambiarUsuario}
      />
      <input
        placeholder="Clave"
        type="password"
        name="clave"
        id="clave"
        value={clave}
        onChange={cambiarClave}
      />
      <button onClick={ingresar}>Ingresar</button>
    </>
  );
}

export default App;
