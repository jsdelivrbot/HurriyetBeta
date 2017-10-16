import axios from 'axios'

const API_KEY = "22c38a275e52406b98e46a52f879b54c"

var instance = axios.create({
    baseURL: "https://api.hurriyet.com.tr/v1",
    headers: {
        'apikey': API_KEY
    },
    validateStatus: function (status) {
        return true
    }
})

const HurriyetService = {

    articles() {
        return instance({ method: "get",  url: "/articles" })
    }

}

export default HurriyetService