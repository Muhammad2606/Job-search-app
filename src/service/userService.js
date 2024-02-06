import axios from "axios";

const addUser = async (user) => {
    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        console.log('User added:', data);
        return data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};
const loginUser = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:3000/login", {
            email,
            password
        });
        const token = response.data.token;
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        console.error('Error logging in:', error);
        throw new Error('Invalid email or password');
    }
};


export { addUser, loginUser };
