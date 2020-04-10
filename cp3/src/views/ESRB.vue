<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('E')" href="#" class="pure-menu-link">E</a></li>
      <li class="pure-menu-item"><a @click="select('E10')" href="#" class="pure-menu-link">E10</a></li>
      <li class="pure-menu-item"><a @click="select('T')" href="#" class="pure-menu-link">T</a></li>
      <li class="pure-menu-item"><a @click="select('M')" href="#" class="pure-menu-link">M</a></li>
    </ul>
  </div>
  <GameList :games="games" />
</div>
</template>

<script>
import GameList from "../components/GameList.vue"
export default {
  name: 'ESRB',
  components: {
    GameList
  },
  data() {
    return { 
      esrb: '',
    }
  },
  computed: {
    games() {
      return this.$root.$data.games.filter(game => game.esrb === this.esrb);
    }
  },
  methods: {
    select(esrb) {
      this.esrb = esrb;
    }
  }
}
</script>