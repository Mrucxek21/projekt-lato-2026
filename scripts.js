document.addEventListener('DOMContentLoaded', function () {

    function updateCountdown() {
        const cel = new Date('2026-06-01').getTime();
        const teraz = new Date().getTime();
        const roznica = cel - teraz;

        const dni = Math.floor(roznica / (1000 * 60 * 60 * 24));
        const wynik = dni > 0 ? dni : 0;

        const elementDni = document.getElementById('days');
        if (elementDni) {
            elementDni.innerText = wynik;
        }
    }

    updateCountdown();

    const ctx = document.getElementById('weightChart');

    if (ctx) {
        const weightChart = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze'],
                datasets: [{
                    label: 'Masa (kg)',
                    data: [60, 62, 69, 64, 68, 72],
                    borderColor: '#ff4757',
                    backgroundColor: 'rgba(255, 71, 87, 0.1)',
                    borderWidth: 3,
                    pointBackgroundColor: '#ff4757',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#ff4757',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: '#ff4757',
                        bodyColor: '#fff',
                        borderColor: '#333',
                        borderWidth: 1
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        suggestedMin: 70,
                        grid: {
                            color: '#2a2a2a',
                            borderDash: [5, 5]
                        },
                        ticks: {
                            color: '#888',
                            font: { family: "'Segoe UI', sans-serif" }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#888',
                            font: { family: "'Segoe UI', sans-serif" }
                        }
                    }
                }
            }
        });
    }
});