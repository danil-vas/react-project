import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '' 
        }
    }
    onAddValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {name, salary} = this.state;
        return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text" 
                        className="form-control new-post-label"
                        name="name"
                        value={name}
                        onChange={this.onAddValue}
                        placeholder="Как его зовут?" />
                <input type="number" 
                        className="form-control new-post-label"
                        name="salary"
                        value={salary}
                        onChange={this.onAddValue}
                        placeholder="З/П в $?" />
                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
        )
    }
}

export default EmployeesAddForm;