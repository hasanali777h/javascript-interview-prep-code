array1 = [1,2,3,4,5]
array2 = [10,20,30,40,50]
counter = 0
// array1.map(a1 => console.log(a1))
// array2.map(a2 => console.log(a2))
array1.map(a1 => array2.map(a2 => console.log(a1,a2)),console.log(counter++))
