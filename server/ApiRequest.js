import axios from "axios";

const apiRequest = axios.create({
    baseURL: 'http://10.0.2.2:3000',
    headers: { Auth: "Simple AUTH" },
    timeout: 3000
})

export default apiRequest;