function collectStrings(object) {
    let result = [];

    if (typeof object === "string") {
        result.push(object);
    }

    if (typeof object === "object" && !Array.isArray(object)) {
        for(let key in object) {
            result = result.concat(collectStrings(object[key]));
        }
    }

    if (typeof object === "object" && Array.isArray(object)) {
        for(let val of object) {
            result = result.concat(collectStrings(val));
        }
    }

    return result;
};

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])