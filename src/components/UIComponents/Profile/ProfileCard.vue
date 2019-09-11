<template>
  <div class="ProfileCard">
    <div class="row height-full">
      <profile-operations />
      <div class="ProfileInfo pl-50">
        <h1 v-if="profile" class="text-white">{{ profile.username }}</h1>
        <p v-if="profile" class="text-sandlight text-xlg">Rank {{ profile.rank }} ({{profile.position}}% of Top)</p>
        <img src="@/assets/img/icons/challenger.svg" class="Challanger" />
        <img src="@/assets/img/move.svg" class="Icon IconMove"/>
        <p v-if="profile" class="text-sand text-md">{{ profile.queue }}</p>
        <h1 v-if="profile" class="ProfileTier">{{ profile.tier }}</h1>
        <h2 v-if="profile" class="text-sandlight text-xlg">{{ profile.lp }}LP / {{ profile.win }}W  {{ profile.loss}}L</h2>
        <div v-if="profile" class="Rates">
           <div class="Rate">
            <h2 class="RateHeader text-md">Win Rate</h2>
            <h2 class="text-sandlight RateContent text-xlg">{{ (profile.win / profile.matchCount * 100).toFixed(2) }}%</h2>
          </div>
          <div class="Rate">
            <h2 class="RateHeader text-md">Win / Loss</h2>
            <h2 class="text-sandlight RateContent text-xlg">{{ profile.win - profile.loss }}</h2>
          </div>
          <div class="Rate">
            <h2 class="RateHeader text-md">AVG.KDA</h2>
            <h2 class="text-sandlight RateContent text-xlg">{{ profile.kdaAvg }}</h2>
          </div>
          <div class="Rate">
            <h2 class="RateHeader text-md">CS Per Min</h2>
            <h2 class="text-sandlight RateContent text-xlg">{{ profile.csPerMin }}</h2>
          </div>
          <div class="Rate">
            <img :src="require('@/assets/img/icons/kills/' + multikillPath)" />
            <h2 class="text-sandlight RateHeader KillHeader text-md pl-15">Highest Multikill</h2>
          </div>
        </div>
        <h4 v-if="profile" class="MatchNumber">{{ profile.matchCount }} Matches</h4>
      </div>
    </div> 
    <img src="@/assets/img/resize.svg" class="Icon IconResize"/> 
  </div>
</template>
<script>
import ProfileOperations from './ProfileOperations.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ProfileCard',
  props: ['profile'],
  components: {
    ProfileOperations
  },
  computed: {
    multikillPath() {
      let multikill = {
        2: 'doublekill',
        3: "triplekill",
        4: "quadrakill",
        5: "pentakill"
      };
      return multikill[this.profile.multikill] + ".svg";
    }
  }
}
</script>
<style lang="scss" scoped>
  .ProfileCard {
    height: 100%;

    .ProfileInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .ProfileTier {
        color: $yellow;
        text-transform: capitalize;
      }

      .Rates {

        .Rate {
          padding: 0 10px;
          display: inline-block;

          .RateHeader {
            text-align: center;
            color: $sand;
          }
          
          .RateContent {
            text-align: center;
          }
        }
      }
    }

    .MatchNumber {
      color: $sand;
      font-family: 'Karla';
    }

    .Challanger {
      position: absolute;
      right: 50px;
      top: 40px;
    }

    .Icon {
      position: absolute;
      right: 0;
    }

    .IconMove {
      top: 0;
    }

    .IconResize {
      bottom: 0;
    }

    .KillHeader {
      display: inline-block;
      width: 52px;
    }
  }
</style>