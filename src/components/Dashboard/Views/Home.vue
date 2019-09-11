<template>
  <div class="Home">
    <div class="row width-full height-full">
      <div class="width-half mr-10 left">
        <Profile />
        <Champions />
        <Stats />
      </div>
      <div class="width-half height-full">
        <MatchHistory />
      </div>
    </div>
    <Info />
  </div>
</template>
<script>
import { Champions, Info, MatchHistory, Profile, Stats } from '@/components/UIComponents';
export default {
  name: 'Home',
  components: {
    Champions,
    Info,
    MatchHistory,
    Profile,
    Stats
  }
}
</script>
<style lang="scss" scoped>
.Home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .left {
    display: flex;
    flex-direction: column;
  }
}
</style>