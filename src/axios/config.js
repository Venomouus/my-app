import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://covid19-brazil-api.now.sh"
})

export default blogFetch