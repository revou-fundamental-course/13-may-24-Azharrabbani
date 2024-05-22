// Ini Script

// Luas Segitiga
function luasSegitiga(){
    let alas = document.getElementById("fAlas").value;
    let tinggi = document.getElementById("fTinggi").value;
    let errorAlas = document.getElementById("errorAlas");
    let errorTinggi = document.getElementById("errorTinggi");
    let resultDiv = document.querySelector(".resultAlas");

    resultDiv.innerHTML = "";

    if ((alas === "" || alas == null) && (tinggi === "" || tinggi == null)){
        errorAlas.innerHTML = "Alas tidak boleh kosong";
        errorTinggi.innerHTML = "Tinggi tidak boleh kosong";
        return;
    }
    else if (alas === "" || alas == null){
        errorAlas.innerHTML = "Alas tidak boleh kosong";
        return;
    }
    else if(tinggi === "" || tinggi == null){
        errorTinggi.innerHTML = "Tinggi tidak boleh kosong";
        return;
    }

    alas = Number(alas);
    keliling = Number(tinggi);

    let luas = 0.5 * alas * tinggi;
    if (!isNaN(luas)){
       const rumus = document.createElement("p");
       const luasRumus = document.createElement("p");
       const hasil = document.createElement("p");
       rumus.innerHTML = "Luas : 1/2 x a x t";
       luasRumus.innerHTML = `Luas : 1/2 x ${alas} x ${tinggi}`;
       hasil.innerHTML = `Luas : ${luas}`;
       
       resultDiv.appendChild(rumus);
       resultDiv.appendChild(luasRumus);
       resultDiv.appendChild(hasil);

    }
    else{
        alert("INPUT NOT VALID!!!");
    }
}

function isAlasNumber(){
    let alas = parseFloat(document.getElementById("fAlas").value);
    let errorAlas = document.getElementById("errorAlas");
    errorAlas.innerHTML = "";
    
    if (isNaN(alas)){
        errorAlas.innerHTML = "Alas harus berupa angka";
        return;
    }
}

function isTinggiNumber(){
    let tinggi = (document.getElementById("fTinggi").value);
    let errorTinggi = document.getElementById("errorTinggi");
    errorTinggi.innerHTML = "";
    
    if (isNaN(tinggi)){
        errorTinggi.innerHTML = "Tinggi harus berupa angka";
        return;
    }
}

function resetFormAlas() {
    document.getElementById("fAlas").value = "";
    document.getElementById("fTinggi").value = "";
    document.getElementById("errorAlas").innerHTML = "";
    document.getElementById("errorTinggi").innerHTML = "";
    document.getElementById("resultAlas").innerHTML = "";

}


// Keliling Segitiga
function kelilingSegitiga(){
    let sisiA = document.getElementById("fSisiA").value;
    let sisiB = document.getElementById("fSisiB").value;
    let sisiC = document.getElementById("fSisiC").value;
    let errorA = document.getElementById("errorA");
    let errorB = document.getElementById("errorB");
    let errorC = document.getElementById("errorC");
    let resultDiv = document.querySelector(".resultKeliling");
    resultDiv.innerHTML = "";

    if ((sisiA === "" || sisiA == null) && (sisiB === "" || sisiB == null) && (sisiC === "" || sisiC == null)){
        errorA.innerHTML = "Sisi a tidak boleh kosong";
        errorB.innerHTML = "Sisi b tidak boleh kosong";
        errorC.innerHTML = "Sisi c tidak boleh kosong";
        return;
    }
    else if (sisiA === "" || sisiA == null){
        errorA.innerHTML = "Sisi a tidak boleh kosong";
        return;
    }
    else if(sisiB === "" || sisiB == null){
        errorB.innerHTML = "Sisi b tidak boleh kosong";
        return;
    }
    else if(sisiC === "" || sisiC == null){
        errorC.innerHTML = "Sisi c tidak boleh kosong";
        return;
    }

    sisiA = Number(sisiA);
    sisiB = Number(sisiB);
    sisiC = Number(sisiC);

    let keliling = sisiA + sisiB + sisiC;
    if (!isNaN(keliling)){
       const rumus = document.createElement("p");
       const kelilingRumus = document.createElement("p");
       const hasil = document.createElement("p");
       rumus.innerHTML = "Keliling : a + b + c";
       kelilingRumus.innerHTML = `Keliling : ${sisiA} + ${sisiB} + ${sisiC}`;
       hasil.innerHTML = `Keliling : ${keliling}`;
       
       resultDiv.appendChild(rumus);
       resultDiv.appendChild(kelilingRumus);
       resultDiv.appendChild(hasil);

    }
    else{
        alert("INPUT NOT VALID!!!");
    }
}

function isANumber(){
    let sisiA = document.getElementById("fSisiA").value;
    let errorA = document.getElementById("errorA");
    errorA.innerHTML = "";
    
    if (isNaN(sisiA)){
        errorA.innerHTML = "Sisi a harus berupa angka";
        return;
    }
}

function isBNumber(){
    let sisiB = document.getElementById("fSisiB").value;
    let errorB = document.getElementById("errorB");
    errorB.innerHTML = "";
    
    if (isNaN(sisiB)){
        errorB.innerHTML = "Sisi b harus berupa angka";
        return;
    }
}

function isCNumber(){
    let sisiC = document.getElementById("fSisiC").value;
    let errorC = document.getElementById("errorC");
    errorC.innerHTML = "";
    
    if (isNaN(sisiC)){
        errorC.innerHTML = "Sisi c harus berupa angka";
        return;
    }
}

function resetFormKeliling() {
    document.getElementById("fSisiA").value = "";
    document.getElementById("fSisiB").value = "";
    document.getElementById("fSisiC").value = "";
    document.getElementById("errorA").innerHTML = "";
    document.getElementById("errorB").innerHTML = "";
    document.getElementById("errorC").innerHTML = "";
    document.getElementById("resultKeliling").innerHTML = "";

}

// Waiting Display
document.getElementById("info-nav").addEventListener("click", function(){
    let content = document.getElementById("info-section");
    if (content.style.display === "" || content.style.display === "none"){
        content.style.display = "block";
        let luas = document.getElementById("luas-section");
        let kel = document.getElementById("keliling-section");
        let about = document.getElementById("aboutMe-section");
        luas.style.display = "none";
        kel.style.display = "none";
        about.style.display = "none";

    }
    else{
        return;
    }
})

document.getElementById("luas-nav").addEventListener("click", function(){
    let content = document.getElementById("luas-section");
    if (content.style.display === "" || content.style.display === "none"){
        content.style.display = "block";
        let info = document.getElementById("info-section");
        let kel = document.getElementById("keliling-section");
        let about = document.getElementById("aboutMe-section");
        info.style.display = "none";
        kel.style.display = "none";
        about.style.display = "none";
    }
    else{
        return;
    }
})

document.getElementById("kel-nav").addEventListener("click", function(){
    let content = document.getElementById("keliling-section");
    if (content.style.display === "" || content.style.display === "none"){
        content.style.display = "block";
        let info = document.getElementById("info-section");
        let luas = document.getElementById("luas-section");
        let about = document.getElementById("aboutMe-section");
        info.style.display = "none";
        luas.style.display = "none";
        about.style.display = "none";
    }
    else{
        return;
    }
})

document.getElementById("about-nav").addEventListener("click", function(){
    let content = document.getElementById("aboutMe-section");
    if (content.style.display === "" || content.style.display === "none"){
        content.style.display = "block";
        let info = document.getElementById("info-section");
        let luas = document.getElementById("luas-section");
        let kel = document.getElementById("keliling-section");
        info.style.display = "none";
        luas.style.display = "none";
        kel.style.display = "none";
    }
    else{
        return;
    }
})

