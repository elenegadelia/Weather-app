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

<style scoped>
.page {
  width: 100%;

  padding: 10px 80px;
}

p {
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin: 10px auto;
}

.weather-forecast {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  width: 100%;
}
</style>
