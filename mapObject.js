import testObject from "./object.js";

function mapObject(testObject,cb){
    return cb(testObject);
}
export default mapObject;