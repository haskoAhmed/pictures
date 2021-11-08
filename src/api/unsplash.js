import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID ySj4espoE-fN5i3c3Gp9zchlJ6FYtTrOouqfuukXeqM",}
})