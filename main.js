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





