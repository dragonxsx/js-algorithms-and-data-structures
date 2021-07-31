// https://www.hackerrank.com/challenges/sock-merchant/

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    let counters = {};
    for (let item of ar) {
        counters[item] = (counters[item] || 0) + 1
    }
    
    let pairs = 0;
    for (let key in counters) {
        pairs += Math.floor(counters[key]/2);
    }
    
    return pairs;
}