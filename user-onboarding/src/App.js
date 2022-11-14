
import axios  from 'axios'
import './App.css';
import { useState } from 'react'

import Form from './Form'

import schema from './Validation/formSchema'
import * as yup from 'yup'

const initialFormValues = {
    username:'',
    email: '',
    password: '',
    termsOfService: false,
    submitButton:'',
}

const initialFormErrors = {
  username:'',
  email: '',
  password: '',
  termsOfService: '',
  submitButton:'',
}

 export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    axios.post(`https://reqres.in/api/users`)
    .then(res => {
      setUsers([res.data, ...users])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''  }))
    .catch(err => setFormErrors({...formErrors,  [name]: err.errors[0]  }))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }
  return (
    <div className="App">
     <Form values={formValues} change={handleChange}  submit={handleSubmit}
     errors={formErrors}/>

     {users.map(user => (
      <div key={user.id}>
        <p>{user.createdAt}</p>
        <p>{user.email}</p>
      </div>
     ))}
    </div>
  );
}