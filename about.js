const motto = ["go", "hard", "or", "go", "home"]
const images = [
    'https://aquakristaly.hu/img/product_images/gN9AdLi7oWwn45wUH4jiTKxaB1kcm3egIhxeDm1d.png',
    'https://evedd.hu/img/74418/5060896620145/500x500/5060896620145.webp?time=1694609207',

    'https://secure.ce-tescoassets.com/assets/HU/265/5060896621265/ShotType1_540x540.jpg',

    'https://dydza6t6xitx6.cloudfront.net/ci-monster-mule-ginger-brew-energy-drink-53c162721485ac25.jpeg',

    'https://cdn1.interspar.at/cachableservlets/articleImage.dam/hu/533302008/dt_sub.jpg',

    'https://assets.sainsburys-groceries.co.uk/gol/7785382/1/640x640.jpg'
]


export const about = ()=>{
        let parent = document.querySelector(".flex-container")
        for (let count = 0; count < motto.length; count++) {
            let nDiv = document.createElement("div")
            nDiv.classList.add("panel")
            nDiv.textContent = motto[count]
            parent.appendChild(nDiv)
        }

        document.querySelector("main").appendChild(parent)

        const panelsNodeList = document.querySelectorAll(".panel")
        panelsNodeList.forEach((item, index) => {
            item.style.backgroundImage = `url(${images[index]})`
        })

        document.querySelector(".flex-container").addEventListener("click",toggleOpen)        
         function toggleOpen(e) {
            if (e.target.classList.contains("open")) {
                e.target.classList.remove("open");
            } else {
                panelsNodeList.forEach((obj) => obj.classList.remove("open"));
                e.target.classList.add("open");
            }}
}
    
      


