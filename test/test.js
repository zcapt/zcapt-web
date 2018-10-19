let Base64 = require('js-base64').Base64;
try {
    console.log(JSON.parse(Base64.decode("asdfghj")));
}catch (e) {
    console.log("error")
}