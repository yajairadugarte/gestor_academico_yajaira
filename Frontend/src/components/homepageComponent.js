import React, { Component } from 'react'

class homepageComponent extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
          <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">estudiantes</button>
          <button type="button" class="btn btn-primary">profesores</button>
         <button type="button" class="btn btn-primary">administradores</button>
     
       </div>
 </div>
    )
  }
}

export default homepageComponent