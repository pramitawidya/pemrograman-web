const input = document.getElementById("textInput");
const btn_set = document.getElementById("atur");
const btn_addcolor = document.getElementById("tambahWarna");
const btn_add = document.getElementById("tambah");
const footer = document.getElementById("footer");

//button pertama
btn_set.addEventListener("click",function(){
    if (input.value == "merah") {
        const merah = document.getElementsByClassName("warna1")[0];
        merah.style.backgroundColor = "red";
     }
     else if (input.value == "biru") {
        const biru = document.getElementsByClassName("warna1")[1];
        biru.style.backgroundColor = "blue";
     }
     else if (input.value == "kuning") {
        const kuning = document.getElementsByClassName("warna1")[2];
        kuning.style.backgroundColor = "yellow";
     }
     else if (input.value == "ungu") {
        const ungu = document.getElementsByClassName("warna1")[3];
        ungu.style.backgroundColor = "purple";
     }
     else if (input.value == "pink") {
        const pink = document.getElementsByClassName("warna1")[4];
        pink.style.backgroundColor = "pink";
     }
});

//Kembali
const list = document.getElementsByClassName("warna1");
for (let i=0;i<list.length;i++){
    list[i].addEventListener("click",function(){
        list[i].style.backgroundColor = "white";
    })
}

// button 2
btn_addcolor.addEventListener("click", function(){
    let value = input.value;
    const ul = document.getElementById('warna');
    const newList = document.createElement('li');

    newList.appendChild(document.createTextNode(value));
    ul.appendChild(newList);
    newList.style.backgroundColor = value;
})

// button 3
btn_add.addEventListener("click", function(){
   footer.style.display = "block"
});