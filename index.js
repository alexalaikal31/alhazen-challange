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
