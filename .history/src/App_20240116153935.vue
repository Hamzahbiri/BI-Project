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
      <div class="card" style="width:225px; height: 225px;">
         <div class="card-body">
         <h5 class="card-title text-center">Viwes</h5>
        <p class="card-text">XXX vues</p>
          <a href="#" class="btn btn-primary">See more</a>
      </div>
</div></td>
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
        <div class="card ms-3 " style="width:460px; height: 350px;">
         <div class="card-body">
         <h5 class="card-title text-center">Viwes</h5>
         <p class="card-text text-center">XXX vues</p>
         <a href="#" class="btn btn-primary">See more</a>
      </div>
</div>
      </td>
      <td>
        <div class="card me-3 ms-1" style="width:460px; height: 350px;">
         <div class="card-body">
         <h5  class="card-title text-center">Viwes</h5>
         <p class="card-text text-center">XXX vues</p>
         <a href="#" class="btn btn-primary ">See more</a>
      </div>
</div>

      </td>  
    </tr>
  </table>
</div>


<div class="box">
    <div class="chart-container">
      <canvas ref="myChart"></canvas>
    </div><br><br><br>
    <label for="filterSelect" class="form-label ms-5">Select a month to filter:</label>
    <select id="filterSelect" v-model="filterTerm" @change="updateChart" class="form-select ms-5 w-25">
      <option value="">All</option>
      <option v-for="month in originalData.labels" :value="month" :key="month">{{ month }}</option>
    </select>
  </div>

 <div class="box2">
        <div class="chart-container">
          <canvas ref="myChart2"></canvas>
        </div> 
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
  },
  methods: {
    createChart() {
      const ctx = this.$refs.myChart.getContext('2d');
      this.myChart = new Chart(ctx, {
        type: 'bar',
        data: this.originalData,
        options: this.options,
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

.box{
  width: 600px;
  height: 500px;
  position: absolute;
  margin-left: 50px;
  left: 60%;
  top: 50px;
}
.box2{
  width: 600px;
  height: 500px;
  position: absolute;
  margin-left: 50px;
  left: 60%;
  top: 350px;
}
.chart-container {
  width: 150px;
  height: 100px; 
  margin-top: 50px;
}
a{
  color: aliceblue;
}
.navbar{
  width: 100%;
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
            margin-top: 50px;
        }

</style>