import { getData } from "./utils.js";

const url = "https://raw.githubusercontent.com/jozskagyerek72/projects/main/projects.json"

export const projects = ()=>{
    getData(url,renderProjects)
}

function renderProjects(data){
    console.log(data);
    data.forEach(item => {
        const card = document.createElement("div")
        card.classList.add("card")
        
    });
}