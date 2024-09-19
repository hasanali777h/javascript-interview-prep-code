(()=>{
    Promise.resolve().then(()=>{
        console.log("A")
        Promise.resolve().then(()=>{
            console.log("B")
        })
    })
})()
const id = setTimeout(() => {
    console.log("C")
}, 0);