import React, { Component } from 'react'
import App from '../App';
import{ ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'

export default class studentComponent extends Component {
  render() {
    return (
      <div>
        <div  className= "container-fluid">
          <div className="imagen">
          <div  class="row col-4">
          <img src="imagen 3.jpg"/> 
        </div>
        </div>
        </div>
        <ButtonGroup  class="btn-group btn-group-lg">
            <DropdownButton className="miboton"as={ButtonGroup} title="Estudiantes" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Ver Notas</Dropdown.Item>
            <Dropdown.Item eventKey="2">Ver Asignaturas</Dropdown.Item>
            <Dropdown.Item eventKey="3">programas academicos</Dropdown.Item>
            <Dropdown.Item eventKey="4">profesores</Dropdown.Item>
            <Dropdown.Item eventKey="5"></Dropdown.Item>
            <Dropdown.Item eventKey="6">Inscribir Asignaturas</Dropdown.Item>
            <Dropdown.Item eventKey="7">Retirarse de una Asignatura</Dropdown.Item>
          </DropdownButton>
       </ButtonGroup>
      
        
      </div> 
        
    

    );
  }
}
