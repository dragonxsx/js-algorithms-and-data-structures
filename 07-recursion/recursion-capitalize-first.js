// function capitalizeFirst (arr) {
//     // add whatever parameters you deem necessary - good luck!
//     const firstString = arr[0];
//     const secondString = arr[1];
//     if(arr.length === 1) {
//         return firstString[0].toUpperCase() + firstString.slice(1);
//     }

//     if(arr.length === 2) {
//         return [capitalizeFirst([firstString]), capitalizeFirst([secondString])];
//     }

//     return [capitalizeFirst([firstString]), ...capitalizeFirst(arr.slice(1))];
// }

function capitalizeFirst(arr) {
    if(arr.length === 0) {
        return arr;
    }

    const first = arr[0];
    const capitalizedWord = first[0].toUpperCase() + first.slice(1);

    return [capitalizedWord].concat(capitalizeFirst(arr.slice(1)));
}

// function capitalizeFirst (array) {
//     if (array.length === 1) {
//       return [array[0][0].toUpperCase() + array[0].substr(1)];
//     }
//     const res = capitalizeFirst(array.slice(0, -1));
//     const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//     res.push(string);
//     return res;
// }

console.log(capitalizeFirst(['car','taco','banana', 's'])); // ['Car','Taco','Banana']
  