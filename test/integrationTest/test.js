new Promise((resolve) => {
    console.log(1);
    setTimeout(() => {
        resolve("HI")
    },2000);
}).then((re) => {
    console.log(re);
    return new Promise((resolve) => {
        console.log(2);
        setTimeout(resolve,2000);
    });
}).then(() => {
    return new Promise((resolve) => {
        console.log(3);
        setTimeout(resolve,2000);
    });
});