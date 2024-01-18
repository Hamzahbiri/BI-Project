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
          <canvas ref="myChart2"></canvas>
        </div> 
        
 </div>


</template>


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

</style>