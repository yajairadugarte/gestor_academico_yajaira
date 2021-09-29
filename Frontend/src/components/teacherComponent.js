import React, { Component } from 'react'
import{ ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'


export default class teacherComponent extends Component {
  render() {
    return (
      <div>
        <div  className= "container-fluid">
        <div className="imagen">
          <div  class="row col-4">
          <img src="imagen 5.jpg"/> 
        </div>
        </div>
        </div>
        <ButtonGroup  class="btn-group btn-group-lg">
            <DropdownButton className="miboton"as={ButtonGroup} title="Profesores" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Ver Asignaturas</Dropdown.Item>
            <Dropdown.Item eventKey="2">Ver Estudiantes</Dropdown.Item>
            <Dropdown.Item eventKey="3">Ver Notas</Dropdown.Item>
            <Dropdown.Item eventKey="4">Crear Notas</Dropdown.Item>
            <Dropdown.Item eventKey="5">Eliminar Notas</Dropdown.Item>
          </DropdownButton>
       </ButtonGroup>
      </div>
    )
  }
}
