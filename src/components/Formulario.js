import React, { useState } from 'react'

const Formulario = ({ inventario, setInventario, librosPrestados, setLibrosPrestados }) => {

    const [form, setForm] = useState({
        cantidad: ''
    })

    const onSubmit = (e) => {
        e.preventDefault()

        const { cantidad } = form

        if (cantidad < 0) {
            console.log("Dato no valido")
            return
        } else {
            setInventario(inventario - parseInt(cantidad))
            setLibrosPrestados(librosPrestados + parseInt(cantidad))
        }
    }

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Cantidad libros prestados</label>
                <input 
                    type="number" 
                    name="cantidad"
                    className="form-control" 
                    onChange={onChange}
                />
                <button 
                    className="btn btn-primary"
                    type="submit"
                    style={{ width: '100%' }}
                >
                    Prestar
                </button>
            </div>
        </form>
    )
}

export default Formulario
