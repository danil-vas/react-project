import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import './app.css';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
        {name: 'Alex M.', salary: 5000, increase: true, rise: false, id: 2},
        {name: 'Carl W.', salary: 7000, increase: false, rise: false, id: 3}
      ]
    }
    this.maxId = 4;
  }
  deleteItem = (id) => {
    this.setState(({data}) => {
      const newMas = this.state.data.filter(item => item.id !==id);
      return {
        data: newMas
      }
    })
  }
  createItem = (name, salary) => {
    this.setState(({data}) => {
      const item = {
        name: name,
        salary: salary,
        id: this.maxId++
      };
      const newMas = JSON.parse(JSON.stringify(this.state.data));
      newMas.push(item);
      return {
        data: newMas
      }
    })
  }
  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }
  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data}
         deleteItem={this.deleteItem}
         onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm createItem={this.createItem}/>
      </div>
    )
  }
}

export default App;
