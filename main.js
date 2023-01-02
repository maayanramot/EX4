function handleClick() {
    console.log("Element Clicked");
    document.getElementById("placesILove").style.color = 'red';
    }

function handleClick2() {
    console.log("Element Clicked");
     document.getElementById("contactMe").style.color = 'red';
    }
   
function delayHandleClick(handleClick) {
    setTimeout(handleClick(),3000);
    setTimeout(handleClick2(),3000);
}

function indicateDarkMode() {
    let backgroundColor = window.getComputedStyle(document.body ,null).getPropertyValue('background-color');
    let textColor = window.getComputedStyle(document.body ,null).getPropertyValue('color');
    if (backgroundColor == 'rgb(255, 255, 255)' && textColor == 'rgb(0, 0, 0)') {
        console.log('Dark mode is enable');
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        console.log('Dark mode is disabled');
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
        document.body.style.color = "black";
    }
}

function changeList() {
    const favoriteFood = ["Raviolli", "Sushi", "Chocolate", "strawberry"];
    let makeList = '<ul>';
    for (let index = 0; index < favoriteFood.length; index++) {
        const element = favoriteFood[index];
        makeList += `<li> ${element} </li>`;
    }
    makeList += '</ul>';
    console.log(makeList);
    document.getElementById("favoriteFood").outerHTML = makeList;
}
// changeList();

let imagesDB = [
    { description : "Goni" , imgURL : "/AboutMe/assets/goni.jpg", alt : "img1" },
    { description : "Diving" , imgURL : "/AboutMe/assets/diving.jpg", alt : "img2" },
    { description : "Dog" , imgURL : "/AboutMe/assets/dog.jpg", alt : "img3" }
];

function returnHTML(array) {
    let gallery = document.createElement("div");
    gallery.classList.add("gallery");

    for ( let i = 0; i < imagesDB.length; i++ ) {
        let img = document.createElement("img");
        img.classList.add("images");
        img.src = imagesDB[i].src;
        img.alt = imagesDB[i].alt;

        let desc = document.createElement("p");
        desc.textContent = imagesDB[i].description;
        desc.classList.add("descImg");

        gallery.appendChild(img);
        gallery.appendChild(desc);

    }
    document.body.appendChild(gallery);
    return gallery;
}









