// Script //

// funciones de reproduccion y pausa el video del video

const rep=()=>{
   let video = document.querySelector(".vid") 
   video.play()
}

const det=()=>{
    let video = document.querySelector(".vid") 
    video.pause()
 }

// Drag & Drop

//variables

const destinos = document.querySelectorAll(".puzzle div");
const imgs = document.querySelectorAll(".puzzleImages img");

const comienzaDrag = (e) => {
    const img = e.target.src;

    if (img[0] == "h") {
        let newURL = img.slice(0, 21)
        let srcImg = img.replace(newURL, "..");
        e.dataTransfer.setData("text", srcImg);
        console.log(srcImg)
    } else {
        e.dataTransfer.setData("text", img);
    }
    
};

const finDrag = (e) => {
    const ocultar = e.target;
    ocultar.style.display = "none";
};

const preventDefault = (e) => {
    e.preventDefault();
};

const dropImg = (e) => {
    const destino = e.target
    let nuevaImagen = e.dataTransfer.getData("text");
    destino.innerHTML = `<img src= "${nuevaImagen}" style = "width:110% ; margin: 0px" >`;
};

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("dragstart", comienzaDrag);
    imgs[i].addEventListener("dragend", finDrag);
}

for (let i = 0; i < destinos.length; i++) {
    const divTarget = destinos[i];
    divTarget.addEventListener("dragover", preventDefault);
    divTarget.addEventListener("drop", dropImg);
}



const reset=()=>{
   window.location.reload()
}
