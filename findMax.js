function maxValue(arr){
    let max = -Infinity
    let len = arr.length
    while(len--){
        if(arr[len] > max){
            max = arr[len];
        }
    }
    return max
}
console.log(maxValue([3,22,56987,0,1,56,41,34]));

function findStrMax(arr){
    let max = -Infinity
    let len = arr.length
    while(len--){
        if(Number(arr[len] > max)){
            max = Number(arr[len])
        }
    }
    return max
}
console.log(findStrMax(['222','5','8888888','10','100']));

function findMax(arr){
    let max = arr[0]
    for (let val of arr) {
        if(val > max){
            max = val
        }
    }
    return max
}
console.log(findMax([3,22,56987,0,1,56,41,34]));