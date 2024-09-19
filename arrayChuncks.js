function arrayChunk(arr,size){
    let result = [];
    for(let i=0; i< arr.length; i+=size){
        const chunck = arr.slice(i,i+size)
        result.push(chunck);
    }
    return result
}
console.log(arrayChunk([1,2,3,4,5,6],3));