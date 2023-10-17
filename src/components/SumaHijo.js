import { Component } from "react";

class SumaHijo extends Component {

    sumarNumero = () => {
        var n = this.props.numero;
        this.props.sumar(n);
    }

    render (){

        return (<div>
            <h2 style={{color:"blue"}} >Sumar {this.props.numero}</h2>
            <button onClick={ () => this.sumarNumero()}>Sumar {this.props.numero}</button>
        </div>)
    }

}

export default SumaHijo;