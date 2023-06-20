export const LoginUser = (email: string, password: string, message: React.Dispatch<React.SetStateAction<string>>) => {
    if (email || password == '') {
        message("Invalid credentials")
    }
    else {
        return fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: email,
                password: password,
            })
        }).then(res => res.json())
    }
}