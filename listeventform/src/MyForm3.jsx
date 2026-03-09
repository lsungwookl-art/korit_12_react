import { useState } from "react";

export default function MyForm3() {
    const [ user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    
    const handleSumit = event => {
        alert(`Hello ${user.firstName} ${user.lastName} !`);
        event.preventDefault();
    }
    
    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    return (
        <form onSubmit={handleSumit}>
            <label>First Name:</label>
            <input type="text" name="firstName" onChange={handleChange} value={user.firstName}/> <br />
            <label>Last Name:</label>
            <input type="text" name="lastName" onChange={handleChange} value={user.lastName}/> <br />
            <label>Email:</label>
            <input type="text" name="email" onChange={handleChange} value={user.email}/> <br />
            <input type="submit"/>
        </form>
    );
}