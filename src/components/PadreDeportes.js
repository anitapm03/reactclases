import { Component } from "react";
import HijoDeporte from './HijoDeporte';

class PadreDeportes extends Component {
    deportes = ["Fútbol", "Baloncesto", "Golf", "Curling", "Sofing"];

    //necesitamos una variable dinamica para saber el 
    //deporte seleccionado en el hijo
    state = {
        favorito: ""
    }

    //necesitamos un metodo que reciba el deporte seleccionado en el hijo
    mostrarFavorito = (deporteSeleccionado) => {

        this.setState({
            favorito: deporteSeleccionado
        })

    }

    render(){

        return(<div>

            <h2 style={{color:"blue"}}>Padre deportes</h2>

            <h3 style={{color:"red"}}>
                su deporte fav es: {this.state.favorito}
            </h3>

            {
                //recorremos todos los deportes y creamos 
                //etiquetas <HijoDeporte /> enviando el nombre
                this.deportes.map((deporte, index) => {
                    return (<HijoDeporte key={index} nombre={deporte} mostrarFavorito={this.mostrarFavorito} />);
                })
            }


        </div>)
    }

}

export default PadreDeportes;