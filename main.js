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





