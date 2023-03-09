const refreshbtn = document.querySelector(".refresh-btn");
maxplt=20
const gencolors= () => {
    randomcol =Math.floor(Math.random() * 0xffffff).toString(16);
    randomcol=`${randomcol.padStart(6,"0")}`;
    document.getElementById("div3").style.backgroundColor ="#"+ randomcol;
    document.getElementById("cdc3").innerHTML=`<p>${randomcol}</p>`
    
gencolors2()
gencolors3()
gencolors4()

    
}
const gencolors2= () => {
    console.log("hi")
    randomcol =Math.floor(Math.random() * 0xffffff).toString(16);
    console.log("h1i")
    randomcol=`${randomcol.padStart(6,"0")}`;
    console.log("hi2")
    document.getElementById("div1").style.backgroundColor ="#"+ randomcol;
    console.log("hi3")
    document.getElementById("cdc").innerHTML=`<p>${randomcol}</p>`
    console.log("hi4")
    randomcol.addEventListener(click,event.clipboardData.setData={"hi"})
    clipboardData.setData('text/plain', 'foo');
    preventDefault();


    
}

const gencolors3= () => {
    randomcol =Math.floor(Math.random() * 0xffffff).toString(16);
    randomcol=`${randomcol.padStart(6,"0")}`;
    document.getElementById("div2").style.backgroundColor ="#"+ randomcol;
    document.getElementById("cdc2").innerHTML=`<p>${randomcol}</p>`
}
const gencolors4= () => {
    randomcol =Math.floor(Math.random() * 0xffffff).toString(16);
    randomcol=`${randomcol.padStart(6,"0")}`;
    document.getElementById("div4").style.backgroundColor ="#"+ randomcol;
    document.getElementById("cdc4").innerHTML=`<p>${randomcol}</p>`
}




var randomcol=54
console.log(randomcol)

refreshbtn.addEventListener("click",gencolors );



gencolors()
