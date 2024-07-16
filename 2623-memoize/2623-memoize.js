/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const map= new Map()
    return function(...args) {
            let val="";
            for(let i=0;i<args.length;i++){
                val+=`,${args[i]}`
            }
            if(map.has(val)){
                return map.get(val)
            }
            else{
                const transformedValue=fn(...args)
                map.set(val,transformedValue)
                return transformedValue
            }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */