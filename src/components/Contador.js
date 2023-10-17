//debemos importar Component para la nueva sintaxis
import { Component } from "react";

//podemos declarar metodos fuera del component, dichos metodos
//se declaran como function y no podemos usar nada de la clase dentro de ellos 
function metodoExterno(){
    console.log("Funcion externa a la clase");
}

class Contador extends Component {

    //variables y metodos son declarados fuera del render
    //no se usan palabras clave como var, let o const
    numero = 1;

    //metodo para incrementar dicho numero
    incrementarNumero = () => {
        //para hacer referencia a las variables de la clase debemos
        //usar la palabra this siempre

        this.numero = this.numero+1;
        console.log("valor de numero: "+ this.numero);
    }

    //el concepto de state es exactamente el mismo, variables que 
    //necesitamos que sean dibujadas, es decir que cambien el render
    //dichas variables van declaradas como objeto dentro de state
    state = {
        valor: parseInt(this.props.inicio)
    }

    //creamos un método para incrementar el valor del contador
    incrementarValor = () =>{

        //para modificar el valor de state, usamos setState indicando
        //mediante json el objeto/s que queremos modificar
        this.setState({
            valor: this.state.valor + 1 
        })
    }


    render() {
        return(<div>

            <h1>Class component Contador</h1>

            {/* la llamada a los metodos de la clase se realiza de forma sencilla
            no se usan parentesis ni nada, solo el nombre del metodo */}
            <h2>Valor del contador {this.state.valor}</h2>
            <button onClick={this.incrementarValor}>incrementar Contador</button>

            <h2 style={{color: "blue"}}>{this.props.inicio}</h2>
            {/* llamamos al metodo mediante una función anonima */}
            <button onClick={()=>{
                //para llamar al metodo de la case usamos this
                this.incrementarNumero();

                //para la llamada a function externa no se utiliza la palabra this
                metodoExterno();
            }}>incrementar</button>
        </div>)
    }

}

export default Contador;