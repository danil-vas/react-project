import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-lis-item';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </ul>
    )
}

export default EmployeesList;