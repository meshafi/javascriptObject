import testObject from "./object.js";

function invert(testObject){
    const invertObject={};
    for(let key in testObject){
        invertObject[testObject[key]]=key;
    }
    return invertObject;
}
export default invert;