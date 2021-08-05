function power(base, exponent){
    function pow (base, exponent) {
        if(exponent === 0) return 1;
        return base * pow(base, exponent-1);
    }
    
    return pow(base, exponent);
}

console.log(power(3,3));
console.log(power(2,0));
console.log(power(2,2));
console.log(power(2,4));