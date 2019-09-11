<template>
  <div class="Stats mb-10">
    <Loading v-if="stats.loading" />
    <template v-else>
      <div class="row">
        <div class="StatsButtons">
          <button v-for="type in gameTypes" :key="type.key" :class="`TypeButton ${active === type.key ? 'IsActive' : ''} text-white text-sm`" @click="setActive(type.key)">
          {{ type.name }}
          </button>
        </div>
        <div class="StatsContent">
          <div class="StatProgress" v-if="currentData">
            <vue-circle :show-percent="false" :progress="100" :size="100" :fill="{color: '#DEAC3A'}">
              <span class="text-darkyellow">{{ currentData.games }}</span>
            </vue-circle>
            <h3 class="text-white text-center">Played Games</h3>
          </div>
          <div class="StatText" v-if="currentData">
            <h2 class="text-white mb-20">{{ `${currentData.t}T ${currentData.g}G ${currentData.y}Y` }}</h2>
            <div class="text-bold text-center">
              <span class="text-yellow">{{ currentData.kills }}</span>
              <span class="text-white"> / </span>
              <span class="text-red">{{ currentData.deaths }}</span>
              <span class="text-white"> / </span>
              <span class="text-green">{{ currentData.assists }}</span>
            </div>
            <h2 class="text-white mt-20 text-center">{{ kda }}</h2>
          </div>
          <div class="StatProgress" v-if="currentData">
            <vue-circle ref="prog" :show-percent="false" :progress="parseInt(100 * currentData.wins / currentData.games)" :size="100" :fill="{color: '#349647'}">
              <span class="text-white">{{ `${parseInt(100 * currentData.wins / currentData.games)}%` }}</span>
            </vue-circle>
            <h3 class="text-white text-center">Success Rate</h3>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import VueCircle from 'vue2-circle-progress/src/index.vue';
import { mapGetters } from 'vuex';
import { gameTypes } from '@/helpers/constants';

export default {
  name: 'Stats',
  components: {
    VueCircle
  },
  data() {
    return {
      gameTypes,
      active: 'normal'
    }
  },
  computed: {
    ...mapGetters({
      stats: 'getStats'
    }),
    currentData: function() {
      let data = this.stats.data && this.active ? this.stats.data[this.active] : null;
      if (data && this.$refs.prog) this.$refs.prog.updateProgress(parseInt(100 * data.wins / data.games));
      return data;
    },
    kda: function() {
      let item = this.currentData;
      let kda = item ? ((item.kills + item.assists) / item.deaths).toFixed(2) : null;
      return kda ? kda === Infinity ? 'Perfect' : `${kda}:1` : null;
    }
  },
  mounted() {
    this.getStats();
  },
  methods: {
    getStats() {
      this.$store.dispatch('getData', { url: 'statistics', key: 'stats' });
    },
    setActive(active) {
      this.active = active;
    }
  }
}
</script>
<style lang="scss">
.Stats {

  .StatText {
    margin: 0 40px;
  }

  .circle {
    width: 100%;
    text-align: center;

    .circle-percent-text-body {
      top: 0 !important;
    }
  }

  .TypeButton {
    padding: 15px 50px;
    display: block;
    width: 100%;
    font-size: 14px;
    background-color: $champ-bg;
    border: none;
    color: $sand;
    outline: none;
    transition: .3s;
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 3px;
    }

    &:hover {
      background-color: $darklila;
      color: $white;
    }
    &.IsActive {
      background-color: $darklila;
      color: $white;
    }
  }

  .StatsContent {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 100;
    background-color: $darklila;
  }
}
</style>