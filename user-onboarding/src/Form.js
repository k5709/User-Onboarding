
import React from 'react'

const Form = (props) => {
    const { change, submit, errors } = props;
    const { username, email, password, termsOfService } = props.values;

    //event handlers
    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }
    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }


    return (
        <div className="App">
            <h1>User-Onboarding Form!</h1>

            <p>{errors.username}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.termsOfService}</p>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        data-test-id='usernameInput'
                        type='text'
                        name='username'
                        placeholder='Insert Name...'
                        value={username}
                        onChange={onChange}
                    />
                </label><br />
                <label>Email:
                    <input
                        data-test-id='emailInput'
                        name='email'
                        type='text'
                        placeholder='Insert Email Address...'
                        value={email}
                        onChange={onChange}
                    />
                </label><br />
                <label>Password:
                    <input
                        data-test-id="passwordInput"
                        name='password'
                        placeholder='Insert Password...'
                        type='password'
                        value={password}
                        onChange={onChange}
                    />
                </label><br />
                <label>Terms Of Service:
                    <input

                        name='termsOfService'
                        type='checkbox'
                        checked={termsOfService}
                        onChange={onChange}
                    />
                </label><br />
                <input type="submit" value="Create a Friend" />
            </form>
        </div>
    );
}
export default Form