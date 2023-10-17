import { Component } from "react";

class DibujosComplejos extends Component {

    //vamos a dibujar una serie de numeros en formato html
    // usando arrays y html
    dibujarNumeros = () => {

        var lista = [];
        //con un bucle vamos generando numeros dinamicos
        //para añadir elementos a la lista
        for (var i = 0; i<= 10; i++){
            var numero = parseInt(Math.random() * 100) +1;
            //Mediante el metodo push del array iremos rellenando
            lista.push(<li key={i}>{numero}</li>);
        }
        return lista;
    }
    render(){
        return(<div>
            <h1>Dibujos complejos HTML</h1>

            <ul>
                {this.dibujarNumeros()}
            </ul>

        </div>)
    }
}

export default DibujosComplejos;