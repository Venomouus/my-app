import axios from "axios";

// eslint-disable-next-line no-unused-vars
const blogFetch = axios.create({
    baseURL: "https://covid19-brazil-api.now.sh"
})

export default blogFetch