<template>
  <div class="ProfileOperations">
    <div class="row profile-image">
      <img src="@/assets/img/icons/heroes/ahri.svg" class="width-full"/>
    </div>
    <div class="row">
      <button class="OperationsBtn width-full">
        <img src="@/assets/img/refresh.svg" />
      </button>
      <button class="OperationsBtn width-full">
        <img src="@/assets/img/favourite.svg" />
      </button>
    </div>
    <div class="row mt-20">
      <span class="text text-sm">Updated 1 hours ago</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileOperations'
}
</script>
<style lang="scss" scoped>
  .ProfileOperations {
    width: 140px;
    display: flex;
    flex-direction: column;
  }

  .OperationsBtn {
    height: 40px;
    background: $darklila;
    border: none;
    outline: none;
    transition: 300ms;
    cursor: pointer;

    &:hover {
      background: $lila;
    }
  }

</style>