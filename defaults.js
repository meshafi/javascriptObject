import testObject from "./object.js";

const defaultObject = 
    { name: 'Bruce Wayne', age: 36, location: 'Gotham',occupation:'Batman'};

function defaults(testObject){
    for(let key in defaultObject){
        if(!testObject.hasOwnProperty(key)){
            testObject[key]=defaultObject[key];
        }
    }
    return testObject;
}
export default defaults;