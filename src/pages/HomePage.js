import React, { useState } from 'react'
import Formulario from '../components/Formulario'

const HomePage = () => {

    const [inventario, setInventario] = useState(1000)
    const [librosPrestados, setLibrosPrestados] = useState(0)

    return (
        <div>

            <br />

            <Formulario
                inventario={inventario}
                setInventario={setInventario}
                librosPrestados={librosPrestados}
                setLibrosPrestados={setLibrosPrestados}
            />
            
            <div className="row">
                <div className="col-md-6">
                    Inventario: {inventario}
                </div>
                <div className="col-md-6">
                    Libros Prestados: {librosPrestados}
                </div>
            </div>
        </div>
    )
}

export default HomePage
