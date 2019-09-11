<template>
  <div class="MatchHistory">
    <div class="HistoryHeader">
      <h4 class="text-lila">Match History</h4>
      <img src="@/assets/img/icons/filter.svg" />
    </div>
    <Loading v-if="matches.loading" />
    <template v-else>
      <div class="HistoryContent">
        <match-row v-for="match in matches.data" :key="match.id" :match="match" />
      </div>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import MatchRow from './MatchRow.vue';
export default {
  name: 'MatchHistory',
  components: {
    MatchRow
  },
  computed: {
    ...mapGetters({
      matches: 'getMatches'
    })
  },
  mounted() {
    this.getMatchHistory();
  },
  methods: {
    getMatchHistory() {
      this.$store.dispatch('getData', { url: 'match-history', key: 'matches' });
    }
  }
}
</script>
<style lang="scss" scoped>
  .MatchHistory {
    height: 100%;
  }
  .HistoryHeader {
    display: flex;
    padding: 30px;
    justify-content: space-between;
    background: $darkblue;
  }
  .HistoryContent {
    overflow: auto;
    height: calc(100% - 90px);
  }
</style>