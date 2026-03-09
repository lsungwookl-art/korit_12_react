import { useState } from 'react';

export default function Users() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSumit = event => {
        alert(`Hello ${username} ${password} ${email}!`);
        event.preventDefault();
    }

  return (
        <form onSubmit={handleSumit}>
            <label>Username:</label>
            <input type="text" name="username" onChange={(event)=>setUsername(event.target.value)} value={username}/> <br />
            <label>Password:</label>
            <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)} value={password}/> <br />
            <label>E-mail:</label>
            <input type="email" name="email" onChange={(event)=>setEmail(event.target.value)} value={email}/> <br />
            <input type="submit"/>
        </form>
  );
}