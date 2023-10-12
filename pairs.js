import testObject from "./object.js";

function pairs(testObject){
    const list=[];

    for(let key in testObject){
        if(testObject.hasOwnProperty(key)){
        list.push({key,value:testObject[key]});
        }
    }
    return list;
}

export default pairs;