
document.addEventListener("DOMContentLoaded", function () {
  const etatCtx = document.getElementById('etatChart').getContext('2d');
  new Chart(etatCtx, {
    type: 'doughnut',
    data: {
      labels: ['Validés', 'En attente', 'Rejetés'],
      datasets: [{
        data: [120, 45, 15],
        backgroundColor: ['#198754', '#ffc107', '#dc3545']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } }
    }
  });

  const evolutionCtx = document.getElementById('evolutionChart').getContext('2d');
  new Chart(evolutionCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai'],
      datasets: [{
        label: 'Enregistrements',
        data: [50, 80, 120, 160, 200],
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13,110,253,0.1)',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});
