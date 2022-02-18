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
      ],
      term: '',
      filter: 'all'
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

  searchEmp = (items, term) => {
    if(term.length === 0 ) return items;

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }
  
  activeFilter = (key) => {
    this.setState({filter: key});
  }

  changeSalary = (id, salary) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id ) {
          return {...item, salary}
        }
        return item;
      })
    }))
  }

  render() {
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} activeFilter={this.activeFilter}/>
        </div>
        <EmployeesList data={visibleData}
         changeSalary={this.changeSalary}
         deleteItem={this.deleteItem}
         onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm createItem={this.createItem}/>
      </div>
    )
  }
}

export default App;
