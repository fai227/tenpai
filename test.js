const needle = require("needle");

for(let i = 0; i < 10000; i++) {
    needle.get("localhost:8080", (error, response) => {
        if(error) {
            console.log(error);
        }
        else if(response.statusCode != 200) {
            console.log(response.statusCode);
        }
    });
}
