<template>
  <div class="container ms-5">
    <h3 class="display-5">Views</h3>
    <router-link to="/">
       <i class="fa fa-home"></i> 
      </router-link>
      <canvas ref="myChart1" width="100" height="50"></canvas>
<br>
      <canvas ref="myChart2" width="100" height="50"></canvas>
<br>
      <canvas ref="myChart3" width="100" height="50"></canvas>
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
    const barColors = ['rgba(75,192,192,0.4)', 'rgba(255,99,132,0.4)', 'rgba(255,205,86,0.4)']; 

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
    this.renderChart1();
    this.renderChart2();
    this.renderChart3();
},
  methods: {   
    renderChart1() {
      const ctx = this.$refs.myChart1.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: this.chartData,
        options: {
    plugins: {
      title: {
        display: true,
        text: 'Views by Campain',
        fontSize: 26,
        position :"top"
   
      },
    },
    responsive: true,
}
        
      });
    },



    renderChart2() {
      const ctx = this.$refs.myChart2.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: this.chartData,
        options: {
    plugins: {
      title: {
        display: true,
        text: 'Views by Campain by gender',
        fontSize: 26,
        position :"top"
   
      },
    },
    responsive: true,
}
      });
    },
    renderChart3() {
      const ctx = this.$refs.myChart3.getContext('2d');
      console.log(this.chartData)
      new Chart(ctx, {
        type: 'bar',
        data: this.chartData,
        options: {
    plugins: {
      title: {
        display: true,
        text: 'Views by Campain by Gender by Ages',
        fontSize: 26,
        position :"top"
   
      },
    },
    responsive: true,
}



      });
    },

    
  },
};
</script>

<style scoped>
.fa-home{
  position: absolute;
  left: 95%;
  top:10px;
  background-color: rgb(29, 225, 255);
  padding: 1%;
  font-size: x-large;
  border-radius: 15px;
  box-shadow: 3px 3px 12px black;

}
.container {
  text-align: center;
  margin-top: 20px;
}

.myChart {
  max-width: 600px;
  max-height: 300px;
  
  margin: 15px;
  display: block;
}
</style>
