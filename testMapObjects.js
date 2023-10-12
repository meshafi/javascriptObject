import testObject from "./object.js";
import mapObject from "./mapObject.js";

const obj=mapObject(testObject, cb);
console.log(obj);

function cb(testObject) {
    for (let key in testObject) {
        if (testObject.hasOwnProperty(key)) {
            if (key == 'name') {
                testObject[key] = testObject[key].toUpperCase();
            }
            if (key == 'age') {
                testObject[key] = 25;
            }
            if (key == 'location') {
                testObject[key] = 'Gotham City'
            }
        }

    }
    return testObject;
}