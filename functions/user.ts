import { useAppDispatch } from "@/redux/hooks"
import { userSuccess } from "@/redux/slices/userSlice"

export const LoginUser = (email: string, password: any) => {
    try {
        return fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: email,
                password: password,
            })
        }).then(data => data.json()).then(data => data)
    }
    catch (error: any) {
        console.log("error", error)
    }
}