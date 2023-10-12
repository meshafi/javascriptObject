import testObject from "./object.js";
// const testObject = require('./object');

function keys(testObject){
    const allNames=[];
    const allKeys=[];
    for(let i=0;i<testObject.length;i++){
        allNames.push(testObject[i].name);
    }

    for (let key in testObject) {  
        if (testObject.hasOwnProperty(key)) {
            allKeys.push(key);
          }
      }
    return {allNames,allKeys};
}
export default keys;