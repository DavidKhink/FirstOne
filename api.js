var main = document.querySelector(".main")
//ანიმეები ცალკ-ცალკე ბათონებზე

let baki = document.querySelector(".baki")
let aot = document.querySelector(".aot")
let naruto = document.querySelector(".naruto")
let pieonece = document.querySelector(".pieonece")
let demon = document.querySelector(".demon")
let clear = document.querySelector(".clear")

clear.addEventListener("click", function(){
    main.innerHTML = ""
})
baki.addEventListener("click", function(){
    fetch("https://api.jikan.moe/v4/anime?q=baki").then(x=>{
        return x.json()
    })
    .then(z=>{
        for(var i of z.data){
            var tmp = `
            <div class = "card">
                <img scr = "${i.images.jpg.image_url}" >
                <h1>${i.title}</h1>
                <h2>${i.rating}</h2>
                <h3>${i.status}</h3>
                </div>
                `
                main.innerHTML += tmp;
                console.log(i)
        }
    })
    main.innerHTML = ""
})
aot.addEventListener("click", function(){
    fetch("https://api.jikan.moe/v4/anime?q=aot").then(x=>{
        return x.json()
    })
    .then(z=>{
        for(var i of z.data){
            var tmp = `
            <div class = "card">
                <img scr = "${i.images.jpg.image_url}" >
                <h1>${i.title}</h1>
                <h2>${i.rating}</h2>
                <h3>${i.status}</h3>
                </div>
                `
                main.innerHTML += tmp;
                console.log(i)
        }
    })
    main.innerHTML = ""
})
naruto.addEventListener("click", function(){
    fetch("https://api.jikan.moe/v4/anime?q=naruto").then(x=>{
        return x.json()
    })
    .then(z=>{
        for(var i of z.data){
            var tmp = `
            <div class = "card">
                <img scr = "${i.images.jpg.image_url}" >
                <h1>${i.title}</h1>
                <h2>${i.rating}</h2>
                <h3>${i.status}</h3>
                </div>
                `
                main.innerHTML += tmp;
                console.log(i)
        }
    })
    main.innerHTML = ""
})
pieonece.addEventListener("click", function(){
    fetch("https://api.jikan.moe/v4/anime?q=one-piece").then(x=>{
        return x.json()
    })
    .then(z=>{
        for(var i of z.data){
            var tmp = `
            <div class = "card">
                <img scr = "${i.images.jpg.image_url}" >
                <h1>${i.title}</h1>
                <h2>${i.rating}</h2>
                <h3>${i.status}</h3>
                </div>
                `
                main.innerHTML += tmp;
                console.log(i)
        }
    })
    main.innerHTML = ""
})
demon.addEventListener("click", function(){
    fetch("https://api.jikan.moe/v4/anime?q=demon-slayer").then(x=>{
        return x.json()
    })
    .then(z=>{
        for(var i of z.data){
            var tmp = `
            <div class = "card">
                <img scr = "${i.images.jpg.image_url}" >
                <h1>${i.title}</h1>
                <h2>${i.rating}</h2>
                <h3>${i.status}</h3>
                </div>
                `
                main.innerHTML += tmp;
                console.log(i)
        }
    })
    main.innerHTML = ""
})
