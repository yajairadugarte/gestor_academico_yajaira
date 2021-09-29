import React, { Component } from 'react';
import {InputGroup, Button, FormControl} from 'react-bootstrap';
import axios from 'axios';

class formCrearPersona extends Component {
  constructor(props){
      super(props)

      this.state = {
          DocIdent: "",
          nombre: "",
          apellido: "",
          correoElectronico: "",
          telefono: "",
          celular: "",
          fechaNac: "",
          nacionalidad: "",
          genero: "", 
          direccion: ""
      }

      this.crearPersona = this.crearPersona.bind(this);
  }


  async crearPersona(){
    await axios.post('http://localhost:4000/api/admin/crearPersona' ,{
      DocIdent: this.state.DocIdent,
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      correoElectronico: this.state.correoElectronico,
      celular: this.state.celular,
      fechaNac: this.state.fechaNac,
      nacionalidad: this.state.nacionalidad,
      genero: this.state.genero,
      direccion: this.state.direccion
    })
  }  

  render() {
    return (
      <div class="container">
      <div class="row">
        <InputGroup className="mb-3">
          <Button onClick={this.crearPersona}variant="outline-secondary" id="button-addon1">
            Guardar Aqui
          </Button>
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Documento Identidad"
            value={this.state.DocIdent}
            onChange={e => this.setState({DocIdent:e.target.value})}
      type="text"/>
    
      </InputGroup>
  </div> 
  <div class="row">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Nombre"
            value={this.state.nombre}
            onChange={e => this.setState({nombre:e.target.value})}
            type="text"/>
      </InputGroup>
      </div>   
      <div class="row">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Apellido"
            value={this.state.apellido}
            onChange={e => this.setState({apellido :e.target.value})}
            type="text"/>
      </InputGroup>
      </div>   
      <div class="row">
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
      <div class="row">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Telèfono"
            value={this.state.telefono}
            onChange={e => this.setState({telefono :e.target.value})}
      type="text"/>
      </InputGroup>
      </div>   
      <div class="row">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="celular"
            value={this.state.celular}
            onChange={e => this.setState({celular :e.target.value})}
      type="text"/>
      </InputGroup>
      </div>   
      <div class="row">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Fecha Nacimiento"
            value={this.state.fechaNac}
            onChange={e => this.setState({fechaNac :e.target.value})}
      type="text"/>
      </InputGroup>
      </div>   
      <div class="row">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Nacionalidad"
            value={this.state.nacionalidad}
            onChange={e => this.setState({nacionalidad :e.target.value})}
            type="text"/>
      </InputGroup>
      </div>
      <div class="row">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="Genero"
            value={this.state.genero }
            onChange={e => this.setState({genero :e.target.value})}
      type="text"/>
      </InputGroup>
      </div> 
      <div class="row">
    <InputGroup className="mb-3">
      <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
            placeholder="dirección"
            value={this.state.direccion }
            onChange={e => this.setState({direccion :e.target.value})}
      type="text"/>
      </InputGroup>
      </div>     

    </div>
    )
  }
}

 
export default formCrearPersona;