<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('PS4')" href="#" class="pure-menu-link">PS4</a></li>
      <li class="pure-menu-item"><a @click="select('Xbox')" href="#" class="pure-menu-link">Xbox</a></li>
      <li class="pure-menu-item"><a @click="select('Xbox 360')" href="#" class="pure-menu-link">Xbox 360</a></li>
      <li class="pure-menu-item"><a @click="select('Xbox One')" href="#" class="pure-menu-link">Xbox One</a></li>
    </ul>
  </div>
  <GameList :games="games" />
</div>
</template>

<script>
import GameList from "../components/GameList.vue"
export default {
  name: 'Console',
  components: {
    GameList
  },
  data() {
    return { 
      console: '',
    }
  },
  computed: {
    games() {
      return this.$root.$data.games.filter(game => game.console === this.console);
    }
  },
  methods: {
    select(console) {
      this.console = console;
    }
  }
}
</script>