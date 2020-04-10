<template>
  <div id="app">
  <div class="header">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Publisher">Publisher</router-link> |
      <router-link to="/ESRB">ESRB</router-link> |
      <router-link to="/Console">Console</router-link>
    </div>
    </div>
    <router-view />
    <div class="footer">
    <p><a href="https://github.com/isaymoo/CreativeProject3">github</a></p>
    </div>
  </div>
  
</template>

<style>
body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  background: pink;
  padding: 10px 100px;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: blue;
}

.content {
  padding: 10px 100px;
}
.footer {
margin-top: 30px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  justify-content: center;
  background-color: #D6E9FE;    /* Light blue */
}
</style>
