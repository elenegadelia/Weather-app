<script setup lang="ts">


</script>

<template>
  <div class="weather">
    <div class="info">
      <p class="info__celsius">19°</p>
      <p class="info__information">
        <span class="info__information__temperature">H:24° L:18°</span><br>
        <span class="info__information__town">Tbilisi, Georgia</span>
      </p>
    </div>

    <div class="forecast">
      <img class="forecast__image" src="../assets/cloud.svg" alt="">
      <p class="forecast__forecast-info">Mid Rain</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.weather {
  height: 184px;
  width: 342px;
  margin: 10px 50px;

  background-image: url("../assets/weather-block.svg");
  background-repeat: no-repeat;
  background-position: 0%;

  display: flex;
  justify-items: center;
}

.info {
  width: 136px;
  margin: 59px 22px 20px 20px;

  display: flex;
  flex-direction: column;

  &__celsius {
    font-size: 64px;
    font-weight: 400;
    line-height: 41px;
    letter-spacing: 0.37400001287460327px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    margin-bottom: 24px;
  }

  &__information {
    font-family: SF Pro Text;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.07800000160932541px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    &__temperature {
      color: #EBEBF599
    }

    &__town {
      color: #FFFFFF;
    }
  }
}

.forecast {
  width: 164px;
  margin: -23px 4px 20px 0px;

  &__forecast-info {
    color: #FFFFFF;
    font-family: SF Pro Text;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.07800000160932541px;
    text-align: right;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    margin-right: 24px;
  }
}

p {
  margin: 0;
}
</style>
