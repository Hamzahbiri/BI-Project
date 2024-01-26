<template>
  <div class="container">
    <h1 class="display-4 text-center">Views By Compain</h1>
     <canvas ref="myChart"></canvas> 
  </div>
</template>
<script>


import Chart from 'chart.js/auto';
import axios from 'axios';

const data=",clicks,views;C1,110,190;C2,120,180;C3,130,180;C4,140,180;";
const GetData=async()=>{
await axios.get("https://localhost:7056/api/getByCampaign?measures=Views")
.then((res) => {
  console.log(res);
})
.catch(err => console.log(err))
}


export default {
  data() {
    const labels = [];
    const values = [];
    const split=data.split(";");
    const axis= split.shift().split(",").filter(String)
    split.pop();
    split.forEach((e) => {
        const vals = e.split(",");
        labels.push(vals[0]);
        console.log(vals.slice(1).map(Number));
        values.push(vals.slice(1).map(Number));
        
    });
    
    const datasets = [];
    const barColors = ['rgba(75,192,192,0.2)', 'rgba(255,99,132,0.2)', 'rgba(255,205,86,0.2)']; 

    for (let i = 0; i < values[0].length; i++) {
        const dataValues = values.map((item) => item[i]);
        datasets.push({
            label: axis[i],
            backgroundColor: barColors[i % barColors.length], 
            borderColor: barColors[i % barColors.length],
            borderWidth: 1,
            data: dataValues,
        });
    }

    return {
        chartData: {
            labels: labels,
            datasets: datasets,
        },
    };
},
mounted() {
    GetData();
    this.renderChart();
},

  methods: {

      
    renderChart() {
      const ctx = this.$refs.myChart.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: this.chartData,
        options: {
          
        },
        
      });
    },
  },
};
</script>
<style scoped>

</style>

