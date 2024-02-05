import type { User } from "@/models/UserModel"

const USER = 'USER'

export const getUser = () => {
    const user = localStorage.getItem(USER)
    if (user) {
        return JSON.parse(user)
    }
}

export const setUser = (user: User) => {
    localStorage.setItem(USER, JSON.stringify(user))
}

export const removeUser = () => {
    localStorage.removeItem(USER)
}