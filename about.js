const motto = ["ha", "meg", "kell", "akkor", "meg", "kell"]
const images = [
    'https://curiousnatureshop.com/cdn/shop/products/image_12f7a3d9-3c33-42f7-b642-33e5bd87f3bc_1024x.heic?v=1648673351',
    'https://i.imgflip.com/83u9lw.jpg',

    'https://pbs.twimg.com/profile_images/1651032754690072580/ocAJMfWx_400x400.jpg',

    'https://preview.redd.it/eren-yeager-is-literally-me-im-a-sigma-lone-wolf-who-went-v0-cpgo0um99m3c1.jpg?width=360&format=pjpg&auto=webp&s=1400b15bff2bdf8d955e71485740147818e2b288',

    'https://1.bp.blogspot.com/-r9jgi56MYYs/TWxtCKqOR3I/AAAAAAAABAo/oJGg5MgPRq4/s1600/WerewolfInTheNight.jpg',

    'https://media.licdn.com/dms/image/C561BAQEcE7596VyBNg/company-background_10000/0/1645090551576/felegyhazipekseg_cover?e=2147483647&v=beta&t=7DzVmVowbx5b2u_wz05S61S4Rm1WFj6cIuk4hqEBgdw'
]


export const about = ()=>{
        let parent = document.querySelector(".flex-container")
        for (let count = 0; count < motto.length; count++) {
            let nDiv = document.createElement("div")
            nDiv.classList.add("panel")
            nDiv.textContent = motto[count]
            parent.appendChild(nDiv)
        }

        document.body.appendChild(parent)

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
    
      


