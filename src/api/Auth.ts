import { axiosInstance } from "./axiosInstance"; // Assuming api.ts is in the same directory

export const login = async (email: string, password: string): Promise<{token: string, id:string, email: string}> => {
    try {
        const response = await axiosInstance.post("auth/login", {email, password});
        // Assuming the server returns a token in the response
        const token: string = response.data.token;
        const emailD: string = response.data.user.email
        const id:string = response.data.user.id
        return {token, id, email: emailD};
    } catch (e) {
        console.log((e as Error).message);
        throw e; // Re-throw the error so that the caller can handle it
    }
};
export const register = async (email: string, password: string): Promise<{token: string, username: string, id:string}> => {
    try {
        const response = await axiosInstance.post("auth/register", {email, password});
        const token: string = response.data.token;
        const username: string = response.data.username;
        const id: string = response.data.id
        return {token, username, id};
    } catch (e) {
        console.log((e as Error).message);
        throw e; // Re-throw the error so that the caller can handle it
    }
}

// export const forgotPassword = async (email: string) : Promise<string> => {
//     try {
//         const response = await axiosInstance.post("user/forgot-password", {email})
//         return response.data.message
//     } catch(e) {
//         console.log((e as Error).message);
//         throw e
//     }
// }
