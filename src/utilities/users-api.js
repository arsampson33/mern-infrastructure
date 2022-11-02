const BASE_URL = 'http://localhost:3001/api/users';

export const signUp = async(userData) => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })

    if (res.ok){
        return res.json()
    } else {
        throw new Error('Invalid Sign Up')
    }
} 

export const login = async(userData) => {
    const res = await fetch(BASE_URL + "/login", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })

    if (res.ok){
        return res.json()
    } else {
        throw new Error('Invalid Sign In')
    }
} 