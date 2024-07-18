/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
function flatten(arr,n,depth){
    const resultantArray=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i]) && depth<n){
            resultantArray.push(...flatten(arr[i],n,depth+1))
        }else{
            resultantArray.push(arr[i])
        }
    }
    return resultantArray
}
var flat = function (arr, n) {
    if(n===0){
        return arr
    }
    return flatten(arr,n,0)
};