import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})


// note :
// instance.get("foobar.js")
// output look like  : https://api.themoviedb.org/3/foobar.js


export default instance;