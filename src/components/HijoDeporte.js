import { Component } from "react";

class HijoDeporte extends Component {
    /*
    state = {
        mensaje: ""
    }

    mostrarFavorito = () => {
        this.setState({
            mensaje: "Deporte favorito: "+ this.props.nombre
        })
    }*/

    seleccionarFavorito = () => {
        //necesitamos ejecutar el metodo del padre
        //capturamos props para indicar el deporte seleccionado
        var deporte = this.props.nombre;
        //realizamos la llamada al padre enviando el deporte
        this.props.mostrarFavorito(deporte);
    }

    render(){

        return(<div>

            <h2 style={{color:"green"}} >{this.props.nombre}</h2>

            <button onClick={ () => this.seleccionarFavorito()}>Seleccionar favorito</button>


            {/* <h2 style={{color:"red"}}>{this.state.mensaje}</h2>
            <button onClick={ () => this.mostrarFavorito()}>Marcar favorito</button> */}
        </div>)
    }

}

export default HijoDeporte;