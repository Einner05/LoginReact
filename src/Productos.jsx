import { useEffect, useState } from "react";

function Productos() {
  const [productos, setProductos] = useState([]);

  async function obtenerProductos() {
    const peticion = await fetch("http://localhost:3000/productos", { credentials: "include" });
    if (peticion.ok) {
      const respuesta = await peticion.json();
      setProductos(respuesta);
    }
  }

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <>
      <h1>Informacion de Productos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>stock</th>
            <th>proveedor</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.stock}</td>
              <td>{producto.proveedor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Productos;
