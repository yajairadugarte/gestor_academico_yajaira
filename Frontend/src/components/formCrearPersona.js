import React, { Component } from 'react';
import {InputGroup, Button, FormControl} from 'react-bootstrap';
import axios from 'axios';

class formCrearPersona extends Component {
  constructor(props){
      super(props)

      this.state = {
          Docid: "",
          name: "",
          Lastname: "",
          Email: "",
          Telephone: "",
          Mobile: "",
          Date_Born: "",
          nationality: "",
          Gender: "", 
          
      }

      this.crearPersona = this.crearPersona.bind(this);
  }


  async crearPersona(){
    await axios.post('http://localhost:4000/api/admin/crearPersona' ,{
      Docid: this.state.DocIdent,
      name: this.state.nombre,
      Lastname: this.state.apellido,
      Email: this.state.correoElectronico,
      Telephone: this.state.celular,
      Mobile: this.state.fechaNac,
      Date_Born: this.state.nacionalidad,
      nationality: this.state.genero,
      Gender: this.state.direccion
    })
  }  

  render() {
    return (
      <div class="container">
      <div class="row">
      <div className="formulario">
        <InputGroup className="mb-3">
         
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Documento Identidad"
            value={this.state.DocIdent}
            onChange={e => this.setState({ Docid:e.target.value})}
      type="text"/>
    
      </InputGroup>
      </div>
  </div> 
  <div class="row">
  <div className="formulario">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Nombre"
            value={this.state.name}
            onChange={e => this.setState({ name:e.target.value})}
            type="text"/>
      </InputGroup>
      </div> 
      </div>
      
      <div class="row">
      <div className="formulario">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Apellido"
            value={this.state.lastname}
            onChange={e => this.setState({lastname:e.target.value})}
            type="text"/>
      </InputGroup>
      </div> 
      </div>   
      <div class="row">
      <div className="formulario">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({email :e.target.value})}
            type="text"/>
      </InputGroup>
      </div>
      </div>   
      <div class="row">
      <div className="formulario">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Telèfono"
            value={this.state. Telephone}
            onChange={e => this.setState({Telephone:e.target.value})}
      type="text"/>
      </InputGroup>
      </div>
      </div>   
      <div class="row">
      <div className="formulario">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="celular"
            value={this.state.Mobile}
            onChange={e => this.setState({Mobile :e.target.value})}
      type="text"/>
      </InputGroup>
      </div> 
      </div>   
      <div class="row">
      <div className="formulario">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Fecha Nacimiento"
            value={this.state.Date_Born}
            onChange={e => this.setState({Date_Born:e.target.value})}
      type="text"/>
      </InputGroup>
      </div>
      </div>   
      <div class="row">
      <div className="formulario">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Nacionalidad"
            value={this.state.nationality}
            onChange={e => this.setState({nationality:e.target.value})}
            type="text"/>
      </InputGroup>
      </div>
      </div>
      <div class="row">
      <div className="formulario">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Genero"
            value={this.state.Gender }
            onChange={e => this.setState({Gender :e.target.value})}
      type="text"/>
      </InputGroup>
	  <div className="Boton"> 
	    <button type="button" class="btn btn-primary" onClick={this.crearPersona}variant="outline-secondary" id="button-addon1"> 
	      Guardar Aqui
	    </button>
		</div>
	    
      </div> 
      </div> 
    
    </div>
    
    
    )
  }
}

 
export default formCrearPersona;