<template>
  <div class="Profile">
    <template>
      <profile-card :profile="profile.data"/>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ProfileCard from './ProfileCard.vue';
export default {
  name: 'Profile',
  components: {
    ProfileCard
  },
  computed: {
    ...mapGetters({
      profile: 'getProfile'
    })
  },
  mounted() {
    this.getProfile();
  },

  methods: {
    getProfile() {
      this.$store.dispatch('getData', { url:'profile', key: 'profile' });
    }
  }
}
</script>
<style lang="scss" scoped>
  .Profile {
    position: relative;
    height: 100%;
    padding: 0 40px;

    &::after {
      content : "";
      display: block;
      position: absolute;
      background: url('~@/assets/img/ahri-back.png') no-repeat;
      background-size: cover;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity : 0.15;
      z-index: -1;
    }
  }
</style>