<script setup lang="ts">
import WeatherBlock from "./components/WeatherBlock.vue";
</script>

<template>
  <div class="page">
    <p>Weather Forecast</p>
    <div class="weather-forecast">
      <WeatherBlock v-for="index in 7" :key="index" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 50px;
}

p {
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto;
}

.weather-forecast {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  width: 100%;
}
</style>
