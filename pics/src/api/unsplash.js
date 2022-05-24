import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID pEcsY8tS44gwSHza1YlCH9_mhrOiPfBFgcEiLwEn7-c'
    }
});
