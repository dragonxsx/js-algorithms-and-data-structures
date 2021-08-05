function stringifyNumbers(obj) {
    let o = Object.assign({}, obj);
    
    for(let key in o) {
        if(typeof o[key] === 'object' && !Array.isArray(o[key])){
            o[key] = stringifyNumbers(o[key]);
        }

        if(typeof o[key] === 'object' && Array.isArray(o[key])) {
            for(let item of o[key]) {
                item = stringifyNumbers(item);
            } 
        }
        
        if(typeof o[key] === "number"){
            o[key] = o[key].toString();
        }
    }
    
    return o;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/