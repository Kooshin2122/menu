import axios from "axios";

const getData = async (endpoint = 'menu', setterMethod = () => { }) => {
    try {
        const { data } = await axios.get(`http://10.0.2.2:3000/${endpoint}`,);;
        setterMethod(data)
    } catch (err) {
        console.log('Error--------------------------------', err);
    }
};

export const getDataById = async (endpoint = 'menu', id, setterMethod = () => { }) => {
    try {
        const { data } = await axios.get(`http://10.0.2.2:3000/${endpoint}`,);
        let result = data?.filter((items) => items.id === id)
        setterMethod(result[0])
    } catch (err) {
        console.log('----------------- maya maya ', err);
    }
};

export const getMenuListByCategory = async (endPoint, setterMethod = () => { }, category = "All", lab) => {
    try {
        const { data } = await axios.get(`http://10.0.2.2:3000/${endPoint}`,);
        let result;
        if (lab !== 'All') result = data?.filter((items) => items.category === category);
        else result = data;

        setterMethod(result)
    } catch (err) {
        console.log('----------------- maya maya ', err);
    }
};

export const postData = async (endPoint, data = {}) => {
    axios.post(`http://10.0.2.2:3000/${endPoint}`, data)
}

export const deleteData = async (endPoint, id) => {
    axios.delete(`http://10.0.2.2:3000/${endPoint}/${id}`)
}

export const putData = async (endPoint, id, data = {}) => {
    axios.put(`http://10.0.2.2:3000/${endPoint}/${id}`, data)
}

export default getData;