

// --- Alert Banner --- //
const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML = 
    `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>11</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
    `

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});


// -- Traffic Chart Line Chart Widget --//
const trafficCanvas = document.getElementById("traffic-chart");

// store numerical display data in object literal
let trafficDataMonthly = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 3000],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficDataWeekly = {
    labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4"],
    datasets: [{
        data: [150, 200, 75, 125],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficDataDaily = {
    labels: ["S", "M", "T", "W", "T", "F", "S" ],
    datasets: [{
        data: [10, 15, 5, 50, 30, 45, 66, 70, 14],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficDataHourly = {
    labels: ["0-2", "2-4", "4-6", "6-8", "8-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22", "22-24"],
    datasets: [{
        data: [3, 0, 0, 2, 1, 0, 0, 5, 7, 10, 1, 2],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

// store chart options in object literal
let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataMonthly,
    options: trafficOptions
});

// -- Daily Chart Bar Chart Widget --//
const dailyCanvas = document.getElementById("daily-chart");

// store numerical display data in object literal
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: "# of Hits",
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

// store chart options in object literal
const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }, 
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// -- Mobile Users Doughnut Chart Widget --//
const mobileCanvas = document.getElementById("mobile-chart");

// store numerical display data in object literal
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

// store chart options in object literal
const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

// function to build chart
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// -- Messaging Section Widget -- //

// declare variables to store form fields
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

// click event listener for send
send.addEventListener('click', () => {
    // ensure user and message fields are filled out before processing
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user fied before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully send to: ${user.value}`);
    }
});

// -- Chart Update Function --//
const updateChart = (chart, newData) => {
    chart.data.labels = newData.labels;
    chart.data.datasets[0].data = newData.datasets[0].data;
    chart.update();
}


















