function showSection(id) {
    document.querySelectorAll('.content').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}


let count = 0;
let target = 0;

const countEl = document.getElementById('count');
const targetInput = document.getElementById('targetInput');
const targetText = document.getElementById('targetText');
const progressBar = document.getElementById('progressBar');

targetInput.addEventListener('input', function() {
    target = parseInt(this.value) || 0;
    targetText.textContent = "Target: " + target;
    updateProgress();
});

function tambahZikir() {
    count++;
    countEl.textContent = count;

    // Animasi angka
    countEl.classList.add("animate");
    setTimeout(() => {
        countEl.classList.remove("animate");
    }, 200);

    updateProgress();

    // Jika mencapai target
    if (target > 0 && count >= target) {
        alert("MasyaAllah! Target zikir telah tercapai!");
    }
}

function resetZikir() {
    count = 0;
    countEl.textContent = count;
    updateProgress();
}

function updateProgress() {
    if (target > 0) {
        let percent = (count / target) * 100;
        if (percent > 100) percent = 100;
        progressBar.style.width = percent + "%";
    } else {
        progressBar.style.width = "0%";
    }
}

function ubahFormZakat(){

const jenis = document.getElementById("jenisZakat").value;

document.getElementById("formPenghasilan").classList.add("hidden");
document.getElementById("formEmas").classList.add("hidden");

if(jenis === "penghasilan"){
document.getElementById("formPenghasilan").classList.remove("hidden");
}

if(jenis === "emas"){
document.getElementById("formEmas").classList.remove("hidden");
}

}

function hitungZakat(){

const jenis = document.getElementById("jenisZakat").value;

const hargaEmas = parseFloat(document.getElementById("hargaEmas").value) || 0;

const nisab = hargaEmas * 85;

let total = 0;
let zakat = 0;
let status = "Tidak Wajib";

if(jenis === "penghasilan"){

const gaji = parseFloat(document.getElementById("gaji").value) || 0;
const lain = parseFloat(document.getElementById("penghasilanLain").value) || 0;

total = gaji + lain;

if(total >= nisab){
status = "Wajib Zakat";
zakat = total * 0.025;
}

}

if(jenis === "emas"){

const gram = parseFloat(document.getElementById("emasGram").value) || 0;

total = gram * hargaEmas;

if(total >= nisab){
status = "Wajib Zakat";
zakat = total * 0.025;
}

}

document.getElementById("totalHarta").innerText =
"Rp " + total.toLocaleString("id-ID");

document.getElementById("nisab").innerText =
"Rp " + nisab.toLocaleString("id-ID");

document.getElementById("statusZakat").innerText = status;

document.getElementById("jumlahZakat").innerText =
"Rp " + zakat.toLocaleString("id-ID");

}

function resetZakat(){

document.getElementById("jenisZakat").value = "";
document.getElementById("hargaEmas").value = "";
document.getElementById("gaji").value = "";
document.getElementById("penghasilanLain").value = "";
document.getElementById("emasGram").value = "";

document.getElementById("totalHarta").innerText = "-";
document.getElementById("nisab").innerText = "-";
document.getElementById("statusZakat").innerText = "-";
document.getElementById("jumlahZakat").innerText = "-";

document.getElementById("formPenghasilan").classList.add("hidden");
document.getElementById("formEmas").classList.add("hidden");

}
