import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import './app.css';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {
  const element = [
    {name: 'John C.', salary: 800},
    {name: 'Alex M.', salary: 5000},
    {name: 'Carl W.', salary: 7000}
  ];
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={element}/>
      <EmployeesAddForm />
    </div>
  );
}

export default App;
