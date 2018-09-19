import React from 'react'

class Contador extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        contador:0
      }
    }
    
    aumentar(event) {
      this.setState({contador:this.state.contador+1})
      console.log(event.target.value);
    }
    decrementar(event) { 
      let contador = this.state.contador
      if(contador>0) {
        this.setState({contador:contador-1})
      }
      console.log(event.target.value); 
    }

   
    

    render() {
      return (
        <div>
          <h3>{this.state.contador}</h3>
          <input type="button" onClick={this.aumentar.bind(this)}    value="+" />
          <input type="button" onClick={this.decrementar.bind(this)} value="-" />
        </div>
      )
    }
    
  }

  export default Contador;