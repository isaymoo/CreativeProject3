<template>
<div class="wrapper">
  <div class="products">
    <div class="game" v-for="game in games" :key="game.id">
      <div class="info">
        <h1>{{game.name}}</h1>
        <h1>ESRB: {{game.esrb}}</h1>
        <p>Console: {{game.console}}</p>
        <p>Publisher: {{game.publisher}}</p>
        
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'GameList',
  props: {
    games: Array
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.games {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.game {
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 60px;
  width: 200px;
}
.info {
  color: #000;
  height: 80px;
}
.info h1 {
  font-size: 16px;
}
.info h2 {
  font-size: 14px;
}
.info p {
  margin: 0px;
  font-size: 12px;
}
.auto {
  margin-left: auto;
}
</style>