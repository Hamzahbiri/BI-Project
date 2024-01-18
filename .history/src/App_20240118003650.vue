<template>
    
  <header>
    <nav class="navbar navbar-expand-lg center">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">BI dashboard</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <div class="card w-75 m-2 p-4">
  <table>
    <tr>
      <td>
        <div class="card-container">
    <div class="card">
      <div class="card-body">
        <div class="card-content">
          <h5 class="card-title text-center">Views</h5>
          <div class="views-container">
            
            <div class="icon-container">
              <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/eye.png"
               alt="Eye Image"
               width="40"
               height="40">
            </div>

            <p class="card-text">{{ viewsCount }} views</p>
          </div>
          <a href="#" class="btn btn-primary">See more</a>
        </div>
      </div>
    </div>
  </div>
      
      </td>
      <td><div class="card" style="width:225px; height: 225px;">
         <div class="card-body">
         <h5 class="card-title text-center">Viwes</h5>
        <p class="card-text">XXX vues</p>
          <a href="#" class="btn btn-primary">See more</a>
      </div>
</div></td>
      <td>
        <div class="card" style="width:225px; height: 225px;">
         <div class="card-body">
         <h5 class="card-title text-center">Viwes</h5>
        <p class="card-text">XXX vues</p>
          <a href="#" class="btn btn-primary">See more</a>
      </div>
</div></td>
      <td>
        <div class="card" style="width:225px; height: 225px;">
         <div class="card-body">
         <h5 class="card-title text-center">Viwes</h5>
        <p class="card-text">XXX vues</p>
          <a href="#" class="btn btn-primary">See more</a>
      </div>
</div>
</td>
    </tr>
  </table>
</div>

<div class="card w-75 m-2 p-2">
  <table>
    <tr>
      
      <td>
       
        <canvas ref="gaugeChart"></canvas>
  
      </td>
      <td>
       
 <div class="box3">
        <div class="chart-container">
          <canvas ref="myChart3"></canvas>
        </div> 
 </div>
      </td>  
    </tr>
  </table>
</div>


<div class="box">
  <br>
  <label for="filterSelect" class="form-label ms-5">Select a month to filter:</label>
      <select id="filterSelect" v-model="filterTerm" @change="updateChart" class="form-select ms-5 w-25">
        <option value="">All</option>
        <option v-for="month in originalData.labels" :value="month" :key="month">{{ month }}</option>
      </select>
        <div class="chart-container">
      <canvas ref="myChart"></canvas>
    </div>
    
  </div>

 <div class="box2">
        <div class="chart-container">
          <canvas ref="myLineChart"></canvas>
        </div> 
        
 </div>

</template>


<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      viewsCount: 12345,
      filterTerm: '',
      originalData: {
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai"],
        datasets: [{
          label: 'Exemple de Diagramme',
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      myChart: null,
    };
  },
  mounted() {
    const dataEmail = {
      labels: ["Emails Envoyés", "Emails Reçus", "Emails Expédiés"],
      datasets: [{
        data: [12000, 8000, 6000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
      }]
    };

    const optionsEmail = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Email Statistics',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            generateLabels: function (chart) {
              const data = chart.data;
              if (data.labels.length && data.datasets.length) {
                return data.labels.map((label, i) => ({
                  text: label,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  index: i
                }));
              }
              return [];
            }
          },
          onClick: function (event, legendItem) {
            const index = legendItem.index;
            const chart = this.chart;
            const meta = chart.getDatasetMeta(0);

            // Toggle the visibility of the corresponding dataset
            meta.controller.toggleVisibility(index);

            // Update the chart
            chart.update();
          }
        }
      }
    };

    const optionsDoughnut = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Doughnut Chart',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            generateLabels: function (chart) {
              const data = chart.data;
              if (data.labels.length && data.datasets.length) {
                return data.labels.map((label, i) => ({
                  text: label,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  index: i
                }));
              }
              return [];
            }
          },
          onClick: function (event, legendItem) {
            const index = legendItem.index;
            const chart = this.chart;
            const meta = chart.getDatasetMeta(0);

            // Toggle the visibility of the corresponding dataset
            meta.controller.toggleVisibility(index);

            // Update the chart
            chart.update();
          }
        }
      }
    };

    const ctxEmail = this.$refs.gaugeChart.getContext('2d');
    const gaugeChart = new Chart(ctxEmail, {
      type: 'bar',
      data: dataEmail,
      options: optionsEmail
    });

    const ctx3 = this.$refs.myChart3.getContext('2d');
    const myChart3 = new Chart(ctx3, {
      type: 'doughnut',
      data: dataEmail,
      options: optionsDoughnut
    });

    const lineChartData = {
      labels: ["Janvier", "Février", "Mars", "Avril", "Mai"],
      datasets: [{
        label: 'Exemple de Diagramme',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    };

    const ctxLine = this.$refs.myLineChart.getContext('2d');
    const myLineChart = new Chart(ctxLine, {
      type: 'line',
      data: lineChartData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Line Chart',
            font: {
              size: 16,
              weight: 'bold'
            }
          },
          legend: {
            display: true,
            position: 'top',
            labels: {
              generateLabels: function (chart) {
                const data = chart.data;
                if (data.labels.length && data.datasets.length) {
                  return data.labels.map((label, i) => ({
                    text: label,
                    fillStyle: data.datasets[0].backgroundColor[i],
                    index: i
                  }));
                }
                return [];
              }
            },
            onClick: function (event, legendItem) {
              const index = legendItem.index;
              const chart = this.chart;
              const meta = chart.getDatasetMeta(0);

              // Toggle the visibility of the corresponding dataset
              meta.controller.toggleVisibility(index);

              // Update the chart
              chart.update();
            }
          }
        }
      }
    });

    this.createChart(this.originalData);
  },

  methods: {
    createChart(data) {
      const ctx = this.$refs.myChart.getContext('2d');
      this.myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Sample Chart',
              font: {
                size: 16,
                weight: 'bold'
              }
            },
            legend: {
              display: true,
              position: 'top',
              labels: {
                generateLabels: function (chart) {
                  const data = chart.data;
                  if (data.labels.length && data.datasets.length) {
                    return data.labels.map((label, i) => ({
                      text: label,
                      fillStyle: data.datasets[0].backgroundColor[i],
                      index: i
                    }));
                  }
                  return [];
                }
              },
              onClick: function (event, legendItem) {
                const index = legendItem.index;
                const chart = this.chart;
                const meta = chart.getDatasetMeta(0);

                // Toggle the visibility of the corresponding dataset
                meta.controller.toggleVisibility(index);

                // Update the chart
                chart.update();
              }
            }
          }
        },
      });
    },
    updateChart() {
      const filteredData = this.filterChartData(this.originalData, this.filterTerm);

      if (this.myChart) {
        this.myChart.destroy();
      }

      this.createChart(filteredData);
    },
    filterChartData(data, term) {
      if (!term) {
        return data;
      }

      const filteredLabels = data.labels.filter(label => label.toLowerCase().includes(term.toLowerCase()));
      const filteredData = data.datasets[0].data.filter((_, index) => filteredLabels.includes(data.labels[index]));
      return { labels: filteredLabels, datasets: [{ ...data.datasets[0], data: filteredData }] };
    },
  },
};
</script>



<style scoped>

.box{
  width: 600px;
  height: 500px;
  position: absolute;
  margin-left: 50px;
  left: 60%;
  top: 30px;
}
.box2{
  width: 600px;
  height: 500px;
  position: absolute;
  margin-left: 50px;
  left: 60%;
  top: 400px;
}
.box3{
  position: relative;
  top: -50px;
  width: 400px;
  height: 300px;
}

a{
  color: aliceblue;
}
.navbar{
  width: 115%;
  background-color: rgba(0, 110, 255, 0.966);
  }
    .navbar-nav {
      margin-left: auto;
    }
    .nav-link {
      margin-right: 15px; 
    }

    .chart-container {
            width: 80%;
            margin: auto;
            margin-top: 20px;
        }


        .card-container {
  display: flex;
  justify-content: center;
  align-items: center;

}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-content {
  text-align: center;
}

.views-container {
  display: flex;
  align-items: center;
}

.icon-container {
  width: 20px;
  height: 20px;
  margin-left: 8px; /* Adjust the margin as needed */
  /* Add additional styling for the icon container as needed */
}

</style>