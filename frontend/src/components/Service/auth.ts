import axios from 'axios';
const API_URL = 'http://localhost:3001/auth'

interface IAuth {
    message: string;
    token: string;
}

export const getAuthenticationToken = async (): Promise<IAuth> => {
    const response = await axios.get(`${API_URL}/token`);
    return response.data;
}
