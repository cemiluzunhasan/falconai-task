<template>
  <div :class="`MatchRow ${ match.isVictory ? 'victory' : 'defeat' } ${match.id % 2 == 0 ? 'even' : 'odd' }`">
    <div :class="`MatchText ${match.isVictory ? 'victory' : 'defeat'}`">{{ match.isVictory ? 'victory' : 'defeat' }}</div>
    <div class="MatchCol">
      <p class="text-white">{{ match.queue }}</p>
      <p class="text-sandlight text-md">{{ match.time }}</p>
      <p class="mt-5 text-sandlight">{{ match.length }}</p>
    </div>
    <div class="MatchCol">
      <div class="Skills">
        <img class="HeroImage" :src="require('@/assets/img/icons/heroes/' +  match.hero + '.svg')" />
        <img class="Rune" src='@/assets/img/icons/runes/domination.svg' />  
      </div>
    </div>
    <div class="MatchCol Spells">
      <img class="Spell" :src="require('@/assets/img/icons/spell/' + match.summonerSpells[0] +'.svg')" />
      <img class="Spell" :src="require('@/assets/img/icons/spell/' + match.summonerSpells[1] + '.svg')" />
    </div>
    <div class="MatchCol Scores">
      <h3 class="text-white">{{ match.kills }} / {{ match.deaths }} / {{ match.assists }}</h3>
      <h3 class="text-sandlight">{{ kda == Infinity ? 'Perfect' : `${kda}:1` }} KDA</h3>
    </div>
    <div class="MatchCol">
      <p class="text-sandlight">Level {{ match.level }}</p>
      <h3 class="text-white">{{ match.cs }} CS</h3>
      <p class="text-sandlight">{{ match.kp }}% KP</p>
    </div>
    <div class="MatchCol">
      <span class="Build">
        <img class="BuildIcon" v-for="build in match.build" :key="build" :src="require('@/assets/img/icons/items/' + item(build))" />
        <img class="BuildIcon" src="@/assets/img/icons/items/shop.png" />
      </span>
    </div>
    <div class="MatchCol">
      <table>
        <tbody>
          <tr v-for="(x,i) in match.team" :key="i">
            <td class="text-right" :style="{ lineHeight: '10px'}">
              <span class="text-white text-xs">{{ match.team[i].name }}</span>
            </td>
            <td :style="{ lineHeight: '10px'}">
              <img class="MemberIcon" :src="require('@/assets/img/icons/heroes/' +  match.team[i].character + '.svg')" />
            </td>
            <td :style="{ lineHeight: '10px'}">
              <img class="MemberIcon" :src="require('@/assets/img/icons/heroes/' +  match.enemy[i].character + '.svg')" />
            </td>
            <td :style="{ lineHeight: '10px'}">
              <span class="text-white text-xs">{{ match.enemy[i].name }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="MatchCol">
      <h1 class="text-yellow text-md mb-10">Analysis</h1>
      <h2 class="text-green text-md">Details</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MatchRow',
  props: ['match'],
  computed: {
    kda() {
      let { kills, deaths, assists } = this.match;
      return ( kills + assists ) / deaths;
    }
  },
  methods: {
    item(name) {
      return `${name === '' ? 'empty.png' : (name + '.png')}`
    }
  },
}
</script>
<style lang="scss" scoped>
  .MatchRow {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 15px 0 30px;
    border-left: 12px solid;
    margin-bottom: 4px;

    .MatchText {
      font-size: 14px;
      position: absolute;
      text-transform: uppercase;
      font-weight: bold;
      transform: rotate(-90deg);

      &.victory {
        color: $green;
        left: -19px;
      }

      &.defeat {
        color: $red;
        left: -15px;
      }
    }

    &.victory {
      border-color: $green;

      &::after {
        content: '';
        display: block;
        position: absolute;
        background-color: $green;
        width: 8px;
        height: 8px;
        left: -4px;
        transform: rotate(45deg);
      }
    }

    &.defeat {
      border-color: $red;

      &::after {
        content: '';
        display: block;
        position: absolute;
        background-color: $red;
        width: 8px;
        height: 8px;
        left: -4px;
        transform: rotate(45deg);
      }
    }

    &.even {
      background: $champ-bg;
    }

    &.odd {
      background: $darklila;
    }

    .HeroImage {
      width: 70px;
    }

    .MatchCol {

      &.Spells {
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        top: -2px;
      }

      &.Scores {
        width: 125px;
        text-align: center;
      }

      .Skills {
        position: relative;
        display: inline-block;
      }
      
      .Rune {
        position: absolute;
        bottom: 0;
        width: 20px;
        background: $white;
        border-radius: 50%;
        right: -5px;
      }

      .Spell {
        display: block;
        width: 30px;
      }

      .Build {
        width: 76px;
        display: inline-block;

        .BuildIcon {
          width: 18px;
          height: 18px;
          border-radius: 5px;
          margin-right: 1px;
        }
      }

      .MemberName {
        min-width: 70px;
      }

      .MemberIcon {
        width: 10px;
        height: 10px;
        display: inline-block;
      } 
    }
  }
</style>