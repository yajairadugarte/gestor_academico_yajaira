import React, { Component } from 'react'
import{ ButtonGroup, DropdownButton, Dropdown, Form } from 'react-bootstrap'

import FormCrearpersona from './formCrearPersona';
import axios from 'axios';


class AdminComponent extends Component {

		constructor(props){
		  super(props)
	  
		  this.state = {
			mostrarEsconderFormulario: false
		}
		  this.mostrarEsconderFormulario = this.mostrarEsconderFormulario.bind(this)
		  this.changeVar_1 = this.changeVar_1.bind(this);
		}
	  
		mostrarEsconderFormulario(){
		  this.setState({mostrar: !this.state.mostrarEsconderFormulario})
		}
	  
		async changeVar_1 () {
		  const res = await axios.get('http://localhost:4000/api/admin/getAdmins');
		  this.setState({admin:res.data[0]});
		};
	  
	  
		
	




	
	render() {
		return (
			<div>
				<div  className= "container-fluid">
						<div className="imagen">
							<div  class="row col-4">
								<img src="imagen 6.jpg"/> 
							</div>
						</div>
				</div>
			
										 
						<ButtonGroup  class="btn-group btn-group-lg" >
						    <DropdownButton 
						      className="miboton"as={ButtonGroup} title="Administrador" id="bg-nested-dropdown" onClick={() => this.setState({mostrarEsconderFormulario: !this.state.mostrarEsconderFormulario})}>
						      <Dropdown.Item eventKey="1"> Crear Persona</Dropdown.Item>
					       </DropdownButton>
												
					    </ButtonGroup>
						 
						  
                              {this.state.mostrarEsconderFormulario ? <FormCrearpersona/> : ""}
                        
    
						
			</div>
				 
		
		)
	}
}

export default AdminComponent;