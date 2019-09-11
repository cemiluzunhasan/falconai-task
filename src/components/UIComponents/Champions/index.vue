<template>
  <div class="Champions">
    <Loading v-if="champions.loading" />
    <template v-else>
      <div class="row">
        <div class="width-half" v-if="champions && champions.data">
          <div class="Champion" v-for="champion in champions.data.heros" :key="champion.hero">
            <img class="ChampionImage" :src="require('@/assets/img/icons/heroes/' + champion.hero + '.svg')" />
            <div>
              <div class="ChampionName">{{ champion.hero }}</div>
              <p class="text-sandlight text-sm">{{ champion.csAvg }} ({{ champion.csAvg }})</p>
            </div>
            <div class="mt-5">
              <h1 class="text-md text-darkyellow">{{ champion.kda }}:1 KDA</h1>
              <p class="text-sm text-sandlight">{{ champion.kills }} / {{ champion.deaths }} / {{ champion.assists }}</p>
            </div>
            <div class="mt-5">
              <h1 class="text-md text-darkyellow">{{ champion.winRate }}%</h1>
              <p class="text-sm text-sandlight">{{ champion.games}} Games</p>
            </div>
          </div>
        </div>
        <div class="Chart width-half">
          <chart :chart-data="chartData" :styles="{ position: 'relative', height: '192px' }" />
        </div>
      </div>
    </template>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';
import Chart from './Chart.vue';

export default {
  name: 'Champions',
  components: {
    Chart
  },
  computed: {
    ...mapGetters({
      champions: 'getChampions'
    }),
    chartData: function() {
      let data = {
        labels: this.champions.data ? this.champions.data.stats.map(x => x.name) : [],
        datasets: [
          { backgroundColor: '#9b80fa', data: this.champions.data ? this.champions.data.stats.map(x => x.value) : [] }
        ]
      };
      return data;
    }
  },
  mounted() {
    this.getChampions();
  },
  methods: {
    getChampions() {
      this.$store.dispatch('getData', { url: 'top-characters', key: 'champions' });
    }
  }
}
</script>
<style lang="scss" scoped>
  .Champions {
    margin: 10px 0;

    .Chart {
      background: $darklila;
    }

    .Champion {
      padding: 8px 10px;
      background: $champ-bg;
      box-sizing: border-box;
      border: none;
      display: flex;
      width: 100%;
      outline: none;
      justify-content: space-between;
      align-items: center;

      &:nth-child(2n) {
       background: $darklila; 
      }

      .ChampionImage {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }

      .ChampionName {
        color: $white;
        font-size: 14px;
        font-weight: bold;
        text-transform: capitalize;
      }
    }
  }
</style>