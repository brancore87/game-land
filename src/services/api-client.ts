import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '17f2396a468e41e4b416fb47a965c480'
    }
})