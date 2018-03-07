var axios = require("axios")

axios.get('http://127.0.0.1:8081')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });

axios.get('http://127.0.0.1:8081/del_user/1.0')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });