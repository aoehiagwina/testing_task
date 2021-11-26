function add(num1, num2){
    return num1 + num2;
}

function greaterThan (num1, num2){
    let value;
    if (num1 > num2){
        value = true;
    }
    else{
        value = false;
    }
    return value;
}

function numericals(){
    let list = [];
    for (i=0; i < 10; i++){
        list += i;
    }
    return list.length;
}

console.log(add(3,7));
console.log(greaterThan(3,7));
console.log(greaterThan(5,4));
console.log(numericals());

module.exports = {
    add,
    greaterThan,
    numericals,
}