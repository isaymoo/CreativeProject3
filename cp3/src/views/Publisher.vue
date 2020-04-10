<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Ubisoft')" href="#" class="pure-menu-link">Ubisoft</a></li>
      <li class="pure-menu-item"><a @click="select('Wired Productions')" href="#" class="pure-menu-link">Wired Productions</a></li>
      <li class="pure-menu-item"><a @click="select('505 Games')" href="#" class="pure-menu-link">505 Games</a></li>
      <li class="pure-menu-item"><a @click="select('2k')" href="#" class="pure-menu-link">2k</a></li>
      <li class="pure-menu-item"><a @click="select('Sony')" href="#" class="pure-menu-link">Sony</a></li>
      <li class="pure-menu-item"><a @click="select('Activision')" href="#" class="pure-menu-link">Activision</a></li>
      <li class="pure-menu-item"><a @click="select('Bandai Namco')" href="#" class="pure-menu-link">Bandai Namco</a></li>
      <li class="pure-menu-item"><a @click="select('Bethesda')" href="#" class="pure-menu-link">Bethesda</a></li>
      <li class="pure-menu-item"><a @click="select('EA')" href="#" class="pure-menu-link">EA</a></li>
      <li class="pure-menu-item"><a @click="select('Nighthawke')" href="#" class="pure-menu-link">Nighthawke</a></li>
      <li class="pure-menu-item"><a @click="select('Mad Dog')" href="#" class="pure-menu-link">Mad Dog</a></li>
      <li class="pure-menu-item"><a @click="select('Deep Silver')" href="#" class="pure-menu-link">Deep Silver</a></li>
      <li class="pure-menu-item"><a @click="select('Square Enix')" href="#" class="pure-menu-link">Square Enix</a></li>
      <li class="pure-menu-item"><a @click="select('WB Games')" href="#" class="pure-menu-link">WB Games</a></li>
      <li class="pure-menu-item"><a @click="select('Konami')" href="#" class="pure-menu-link">Konami</a></li>
      <li class="pure-menu-item"><a @click="select('Capcom')" href="#" class="pure-menu-link">Capcom</a></li>
      <li class="pure-menu-item"><a @click="select('Gearbox')" href="#" class="pure-menu-link">Gearbox</a></li>
      <li class="pure-menu-item"><a @click="select('THQ')" href="#" class="pure-menu-link">THQ</a></li>
      <li class="pure-menu-item"><a @click="select('Codemasters')" href="#" class="pure-menu-link">Codemasters</a></li>
      <li class="pure-menu-item"><a @click="select('PUBG Corp')" href="#" class="pure-menu-link">PUBG Corp</a></li>
      <li class="pure-menu-item"><a @click="select('Rebellion')" href="#" class="pure-menu-link">Rebellion</a></li>
      <li class="pure-menu-item"><a @click="select('Sega')" href="#" class="pure-menu-link">Sega</a></li>
      <li class="pure-menu-item"><a @click="select('Microsoft')" href="#" class="pure-menu-link">Microsoft</a></li>
      <li class="pure-menu-item"><a @click="select('Valve')" href="#" class="pure-menu-link">Valve</a></li>
      <li class="pure-menu-item"><a @click="select('LucasArts')" href="#" class="pure-menu-link">LucasArts</a></li>
      <li class="pure-menu-item"><a @click="select('Disney')" href="#" class="pure-menu-link">Disney</a></li>
      <li class="pure-menu-item"><a @click="select('CD Projekt Red')" href="#" class="pure-menu-link">CD Projekt Red</a></li>
    </ul>
  </div>
  <GameList :games="games" />
</div>
</template>

<script>
import GameList from "../components/GameList.vue"
export default {
  name: 'Publisher',
  components: {
    GameList
  },
  data() {
    return { 
      publisher: '',
    }
  },
  computed: {
    games() {
      return this.$root.$data.games.filter(game => game.publisher === this.publisher);
    }
  },
  methods: {
    select(publisher) {
      this.publisher = publisher;
    }
  }
}
</script>