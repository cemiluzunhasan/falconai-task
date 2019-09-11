<template>
  <div class="Info">
    <div class="InfoColumn">
      <img src="@/assets/img/icons/info/shuffle.svg" />
      <div class="InfoText">
        <h3>Lorem Ipsum Dolor</h3>
        <p>
          Aliquam eleifend neque quis tortor laoreet accumsan. Pellentesque ut diam leo aliquam erat volutpat.
        </p>
      </div>
    </div>
    <div class="InfoColumn">
      <img src="@/assets/img/icons/info/compass.svg" />
      <div class="InfoText">
        <h3>Lorem Ipsum Dolor</h3>
        <p>
          Aliquam eleifend neque quis tortor laoreet accumsan. Pellentesque ut diam leo aliquam erat volutpat.
        </p>
      </div>
    </div>
    <div class="InfoColumn">
      <img src="@/assets/img/icons/info/bar.svg" />
      <div class="InfoText">
        <h3>Lorem Ipsum Dolor</h3>
        <p>
          Aliquam eleifend neque quis tortor laoreet accumsan. Pellentesque ut diam leo aliquam erat volutpat.
        </p>
      </div>
    </div>
    <div class="InfoColumn">
      <img src="@/assets/img/icons/info/eye.svg" />
      <div class="InfoText">
        <h3>Lorem Ipsum Dolor</h3>
        <p>
          Aliquam eleifend neque quis tortor laoreet accumsan. Pellentesque ut diam leo aliquam erat volutpat.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Info'
}
</script>
<style lang="scss" scoped>
  .Info {
    background-color: $darkblue;
    padding: 40px;
    display: flex;

    .InfoColumn {
      display: flex;
      align-items: flex-start;

      img {
        margin-right: 20px;
      }

      .InfoText {

        h3 {
          color: $white;
          font-size: 16px;
          margin-bottom: 10px;
        }

        p {
          color: $sand;
          font-size: 14px;
        }
      }
    }
  }
</style>