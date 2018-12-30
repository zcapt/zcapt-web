let i = 0;
j();
function j() {
    if (i<20) {
        console.log(i);
        i ++;
        setTimeout(() => {
            j();
        },1000);
    }
}