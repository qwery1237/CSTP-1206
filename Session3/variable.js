function random() {
    let a = 5;
    if (true) {
        let a = 10;
        if (true) {
            console.log(a);
        }
    }
}
random();
function minElement(array){
    return array.reduce((crr,acc) => {
        if(crr > acc){
            return acc
        }else {
            return crr
        }
    })
}