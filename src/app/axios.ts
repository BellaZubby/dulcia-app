import axios from "axios";

const instance = axios.create({
    // the API (cloud function) URL
    baseURL: "http://localhost:5001/dulcia-app/us-central1/api", 
    headers: {
        'Content-Type':'application/json',
    },
});

export default instance;
