const ctx2010 = document.getElementById('myChart2010').getContext('2d');
const myChart2010 = new Chart(ctx2010, {
    type: 'bar',
    data: {
        labels: [' 04/02/2010 15:00 ', '07/06/2010 07:00'],
        datasets: [{
            label: 2010,
            data: [34.3, 3.3],
            backgroundColor: ['#FF5722', '#2196F3'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2020 = document.getElementById('myChart2020').getContext('2d');
const myChart2020 = new Chart(ctx2020, {
    type: 'bar',
    data: {
        labels: ['02/10/2020 15:00', '31/05/2020 07:00'],
        datasets: [{
            label: 2020,
            data: [38.7, 3.2],
            backgroundColor: ['#FF5722', '#2196F3'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2014 = document.getElementById('myChart2014').getContext('2d');
const myChart2014 = new Chart(ctx2014, {
    type: 'bar',
    data: {
        labels: ['17/10/2014 15:00', '04/06/2014 07:00'],
        datasets: [{
            label: 2014,
            data: [36.2, 2.6],
            backgroundColor: ['#FF5722', '#2196F3'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2024 = document.getElementById('myChart2024').getContext('2d');
const myChart2024 = new Chart(ctx2024, {
    type: 'bar',
    data: {
        labels: ['08/01/2024 15:00', '30/05/2024 06:00'],
        datasets: [{
            label: 2024,
            data: [34.8, 4.4],
            backgroundColor: ['#FF5722', '#2196F3'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});