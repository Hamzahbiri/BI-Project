<template>
    
  <header>
    <nav class="navbar navbar-expand-lg">
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
         <h5 class="card-title">Viwes</h5>
        <p class="card-text">XXX vues</p>
          <a href="#" class="btn btn-primary">See more</a>
      </div>
</div></td>
      <td><div class="card" style="width:225px; height: 225px;">
         <div class="card-body">
         <h5 class="card-title">Viwes</h5>
        <p class="card-text">XXX vues</p>
          <a href="#" class="btn btn-primary">See more</a>
      </div>
</div></td>
      <td>
        <div class="card" style="width:225px; height: 225px;">
         <div class="card-body">
         <h5 class="card-title">Viwes</h5>
        <p class="card-text">XXX vues</p>
          <a href="#" class="btn btn-primary">See more</a>
      </div>
</div></td>
      <td>
        <div class="card" style="width:225px; height: 225px;">
         <div class="card-body">
         <h5 class="card-title">Viwes</h5>
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
        <div class="card ms-3" style="width:400px; height: 350px;">
         <div class="card-body">
         <h5 class="card-title">Viwes</h5>
         <p class="card-text">XXX vues</p>
         <a href="#" class="btn btn-primary">See more</a>
      </div>
</div>
      </td>
      <td>
        <div class="card" style="width:500px; height: 350px;">
         <div class="card-body">
         <h5 class="card-title">Viwes</h5>
         <p class="card-text">XXX vues</p>
         <a href="#" class="btn btn-primary">See more</a>
      </div>
</div>

      </td>  
    </tr>
  </table>
</div>




</template>
  
<script>

export default {
  setup () {
    return {}
  }
}
</script>

<style scoped>
a{
  color: aliceblue;
}
.navbar{
  width: 1510px;

  background-color: rgba(0, 110, 255, 0.966);
  }
    .navbar-nav {
      margin-left: auto;
    }
    .nav-link {
      margin-right: 15px; 
    }

</style>