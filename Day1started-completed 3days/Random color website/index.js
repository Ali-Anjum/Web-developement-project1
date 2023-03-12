const refreshbtn = document.querySelector(".refresh-btn");
function randomcol1 (){
    randomcol =Math.floor(Math.random() * 0xffffff).toString(16);
    randomcol=`${randomcol.padStart(6,"0")}`;
    randomcol="#"+randomcol;
    return randomcol
}
const gencolors= () => {
    let y = randomcol1()
    document.body.style.backgroundColor =y;
    document.getElementById("rt").innerHTML=` <p>${y}</p>`
    document.getElementById("refresh-btn").style.color=y

}

const coppys=()=>{

    navigator.clipboard.writeText(randomcol);
    console.log(randomcol)
alert("copied")
}


refreshbtn.addEventListener("click",gencolors );
gencolors()

document.getElementById("rt").addEventListener("click",coppys)
