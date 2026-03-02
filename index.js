function showSection(id) {
    document.querySelectorAll('.content').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function loadJadwal() {
    const city = document.getElementById('city').value;
    const jadwal = document.getElementById('jadwal');

    let data = {};

    if (city === 'jakarta') {
        data = {
            Subuh: '04:35',
            Dzuhur: '12:05',
            Ashar: '15:25',
            Maghrib: '18:10',
            Isya: '19:20'
        };
    } else if (city === 'bandung') {
        data = {
            Subuh: '04:40',
            Dzuhur: '12:00',
            Ashar: '15:20',
            Maghrib: '18:05',
            Isya: '19:15'
        };
    } else if (city === 'surabaya') {
        data = {
            Subuh: '04:25',
            Dzuhur: '11:55',
            Ashar: '15:15',
            Maghrib: '18:00',
            Isya: '19:10'
        };
    }

    jadwal.innerHTML = '';
    for (let sholat in data) {
        jadwal.innerHTML += `
            <tr>
                <td>${sholat}</td>
                <td>${data[sholat]}</td>
            </tr>
        `;
    }
}