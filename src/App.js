import React, {Component} from 'react';
import './App.css';
import {CardList}  from './components/card-list/card-list.component';
import {SearchBox} from './components/search/search.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      SearchValue: ''
    }
  }
  async componentDidMount(){
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    this.setState({monsters: users})
  }
  render (){
    const {SearchValue, monsters}= this.state
    const filteredMonsters = monsters.filter((monster)=>monster.name.toLowerCase().includes(SearchValue.toLowerCase()))

    return (
      <div className="App">
        <h1 className="bigelow">Monsters Rolodex</h1>
        <SearchBox  placeholder= 'monster search' changeHandler={e=>{
         this.setState({SearchValue: e.target.value})
  }}
        />
        <h1 className="card-header">Monsters </h1>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    )
  }
 
}

export default App;
