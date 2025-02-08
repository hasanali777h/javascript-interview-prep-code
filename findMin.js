function minValue(arr){
    let min = Infinity
    let len = arr.length
    while(len--){
        if(arr[len] < min){
            min = arr[len]
        }
    }
    return min
}
console.log(minValue([45,64,92,6666,8965741,1,3456987745,52555]));

function minStrValue(arr){
    let min = Infinity
    let len = arr.length
    while(len--){
        if(Number(arr[len] < min)){
            min = Number(arr[len])
        }
    }
    return min
}
console.log(minStrValue(['99999','2222','5','10001457','1']));

function findMin(arr){
    let min = arr[0]
    for(let val of arr){
        if(val < min){
            min = val
        }
    }
    return min
}
console.log(findMin([45,64,92,6666,8965741,1,3456987745,52555]));