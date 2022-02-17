import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-lis-item';

const EmployeesList = ({data}) => {
    const users = data.map(item => {
        return (
            <EmployeesListItem {...item}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {users}
        </ul>
    )
}

export default EmployeesList;