
import React, { Component } from 'react'
import Form from './componets/Form'
import Recipes from './componets/Recipes';
export default class App extends Component {
state = {
recipe:[]

}

getRecipe =async(e)=>{
   const recipeName = e.target.elements.recipeName.value;

  e.preventDefault()
  const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipeName}`)
  const data = await response.json()
  
  this.setState({recipe:data.recipes})
  console.log(this.state.recipe);
}

  render() {
    return (
      <div>
        <p>heelo how areyou</p>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipe={this.state.recipe} />

      </div>
    )
  }
}
