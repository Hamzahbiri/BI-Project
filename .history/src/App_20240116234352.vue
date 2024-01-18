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
  <select id="filterSelect" v-model="filterTerm" class="form-select ms-5 w-25">
      <option value="">All</option>
    </select>
        <div class="chart-container">
      <canvas ref="myChart"></canvas>
    </div>
 
  </div>

 <div class="box2">
        <div class="chart-container">
          <canvas ref="myChart2"></canvas>
        </div> 
 </div>



</template>

<script>

import Chart from 'chart.js/auto'; 
import { Chart, registerables } from 'chart.js';
import 'chartjs-gauge';

export default {
  mounted() {
   
    const data = {
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

    // Configuration du diagramme
    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    // Création du diagramme
    const ctx = this.$refs.myChart.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });

    const ctx2 = this.$refs.myChart2.getContext('2d');
    const myChart2 = new Chart(ctx2, {
      type: 'bar',
      data: data,
      options: options
    });

    const ctx3 = this.$refs.myChart3.getContext('2d');
    const myChart3 = new Chart(ctx3, {
      type: 'doughnut',
      data: data,
      options: options
    });



    export default {
  data() {
    return {
      dataEmail: {
        labels: ["Emails Envoyés", "Emails Reçus", "Emails Expédiés"],
        datasets: [{
          value: 12000, // Utilisez la propriété 'value' pour la jauge
          color: 'rgba(255, 99, 132, 0.5)',
        }]
      }
    };
  },
  mounted() {
    Chart.register(...registerables);

    const options = {
      plugins: {
        gauge: {
          axis: {
            min: 0,
            max: 15000, // Ajustez cela en fonction de vos valeurs réelles
            ticks: {
              stepSize: 5000,
              showLabelBackdrop: false,
            }
          },
          arc: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderCapStyle: 'butt',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0,
            spacing: 0,
          },
          pointer: {
            length: 0.8,
            width: 0.15,
          },
        },
      }
    };

    // Création du Gauge Chart
    const ctx = this.$refs.gaugeChart.getContext('2d');
    const gaugeChart = new Chart(ctx, {
      type: 'gauge', // Utilisez le type 'gauge' pour le Gauge Chart
      data: this.dataEmail, // Utilisez this.dataEmail à la place de data
      options: options
    });
  }

  

</script>

<style scoped>
body{
  position:sticky;
}

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
            margin-top: 50px;
        }

</style>