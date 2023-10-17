import { Component } from "react";
import SumaHijo from './SumaHijo';

class SumaPadre extends Component {

    state = {
        numeros: [],
        num: 0
    }

    //metodo generar numero
    generarNumero = () => {
        this.state.numeros.push(parseInt(Math.random() * 100)+1);
        this.setState({
            numeros: this.state.numeros
        })
    }

    //metodo para sumar
    sumar = (n) => {
        var suma = parseInt(this.state.num) + parseInt(n);
        this.setState({
            num: suma
        })
    }

    render() {

        return(<div>
            <h1 style={{color:"red"}}>La suma es: {this.state.num}</h1>

            <button onClick={ () => this.generarNumero()}>Nuevo numero</button>
            <hr></hr>

            {
                this.state.numeros.map((numero,index) => {
                    return(<div key={index}>
                    <SumaHijo  numero={numero} sumar={this.sumar} />
                    </div>)
                })
            }
        </div>)
    }


}

export default SumaPadre;