import Chart from 'chart.js/auto';

export let chart = new Chart("chart_canvas", {
    type: "bar",
    data: {
      datasets: [
        {
            borderColor: "#007cfb",
            backgroundColor: "#0062c5",
        },
        {
            borderColor: "#000000",
            backgroundColor: "#cb2c31",
        }
      ]
    },
    options: {
      plugins: {
        legend: {display: false},
        tooltip: {enabled: false},
      },
      scales: {
        x: {display: false},
        y: {display: false}
      },
    }
  })

  
export function updateChart(xValues, remaining_principal, interest_paid_term) {
    chart.data.labels = xValues
    chart.data.datasets[0] = {
        data: remaining_principal,
        label: 'Remaining Principal'

    }
    chart.data.datasets[1] = {
        data: interest_paid_term,
        label: 'Interest Paid'

    }
    chart.options.scales = {
        x : {display: true},
        y : {display: true},
    }
    chart.options.plugins = {
        legend: {display: true},
        tooltip: {enabled: true},
    }
    chart.update()
  }

// if ("serviceWorker" in navigator) {
// window.addEventListener("load", function() {
//     navigator.serviceWorker
//     .register("/serviceWorker.js")
//     .then(res => console.log("service worker registered"))
//     .catch(err => console.log("service worker not registered", err))
// })
// }