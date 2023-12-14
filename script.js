fetch("http://localhost:3000/main")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        console.log(element)
    })
})