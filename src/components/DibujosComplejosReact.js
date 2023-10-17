import { Component } from "react";

class DibujosComplejosReact extends Component {
    //declaramos un array de nombres dentro de state para que sea dinamico
    state = {
        nombres: ["Ana", "Alexia", "Alberto", "Paco", "Mario", "Alejandro"]
    }

    //metodo para generar nuevos nombres
    generarNombre = () => {
        this.state.nombres.push("Maria");
        this.setState({
            nombres: this.state.nombres
        })
    }

    render() {

        return(<div>
            <h1>Dibujo complejo con react</h1>

            <button onClick={ () => this.generarNombre()}>
                Generar nombre     
            </button>

            {
                //este codigo react debe tener un return y es 
                //codigo logico que utiliza la sintaxis jsx
                this.state.nombres.map((name, index) => {
                    //nunca podemos dejar vacío este codigo, debe
                    //contener un return
                    return(<h3 key={index} style={{color:"blue"}}>{name}</h3>)
                }) 

            }
        </div>)
    }
}

export default DibujosComplejosReact;