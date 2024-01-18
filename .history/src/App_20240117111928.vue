<template>
  <div>
    <div class="chart-container">
      <canvas ref="myChart"></canvas>
    </div>
    <label for="filterSelect">Select a month to filter:</label>
    <select id="filterSelect" v-model="filterTerm" @change="updateChart">
      <option value="">All</option>
      <option v-for="month in originalData.labels" :value="month" :key="month">{{ month }}</option>
    </select>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
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
    this.createChart();
    this.updateChart();
  },
  methods: {
    createChart() {
      const ctx = this.$refs.myChart.getContext('2d');
      this.myChart = new Chart(ctx, {
        type: 'bar',
        data: this.originalData,
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
      this.myChart.data = filteredData;
      this.myChart.update();
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
.chart-container {
  position: relative;
  width: 80%;
  margin: auto;
}
</style>
