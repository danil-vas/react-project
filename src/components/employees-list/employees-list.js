import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data, deleteItem, onToggleProp}) => {
    const users = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id}
            {...itemProps}
             deleteItem={() => deleteItem(id)}
             onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {users}
        </ul>
    )
}

export default EmployeesList;