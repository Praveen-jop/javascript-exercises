const sumAll = function(...args) {
    st = args[0]
    lt = args[args.length-1]

    if(st > lt){
        temp = lt
        lt = st
        st = temp
    }
    else if(st<0){
        return 'ERROR'
    }
    else if(typeof st != 'number'){
        return 'ERROR'
    }
    else if(typeof lt != 'number'){
        return 'ERROR'
    }
    else if(Math.floor(st) != st){
        return 'ERROR'
    }

    let sum = 0
    for(i=st;i<=lt;i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
