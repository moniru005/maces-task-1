import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: "https://maces-task-1-server.vercel.app/"
})

const useAxiosPublic = () => {

    return axiosPublic;
};

export default useAxiosPublic;