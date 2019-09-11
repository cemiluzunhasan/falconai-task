<template>
  <div class="Sidebar">
    <img src="@/assets/img/logo.svg" class="Logo"/>
    <div class="Tabs Menu">
      <div class="Item">
        <img src="@/assets/img/icons/sidebar/dashboard.svg">
      </div>
      <div class="Item">
        <img src="@/assets/img/icons/sidebar/charts.svg">
      </div>
      <div class="Item">
        <img src="@/assets/img/icons/sidebar/details.svg">
      </div>
      <div class="Item">
        <img src="@/assets/img/icons/sidebar/user.svg">
      </div>
      <div class="Item">
        <img src="@/assets/img/icons/sidebar/videos.svg">
      </div>
    </div>
    <div class="Tabs Operations">
      <div class="Item">
        <img src="@/assets/img/icons/sidebar/search.svg">
      </div>
      <div class="Item">
        <img src="@/assets/img/icons/sidebar/settings.svg">
      </div>
      <div class="Item bg-red">
        <img src="@/assets/img/icons/sidebar/logout.svg">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
}
</script>
<style lang="scss">
  .Sidebar {
    
    .Logo {
      display: block;
      margin: 40px auto;
    }
    .Tabs {
      position: relative;
  
      &.Menu {
        margin-top: 160px;
      }
      
      &.Operations {
        position: absolute;
        bottom: 0px;
      }
  
      .Item {
        width: 70px;
        height: 70px;
        display: flex;
        margin: 15px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all .3s;

        &:hover {
          box-shadow: 0 25px 50px 0 rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
</style>