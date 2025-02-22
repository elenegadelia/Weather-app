<script setup lang="ts">
import { onMounted } from "vue";
import WeatherBlock from "./components/WeatherBlock.vue";
import { useWeatherStore } from "./stores/useWeatherStore";

const weatherStore = useWeatherStore();

onMounted(async () => {
  await weatherStore.fetchForecasts();
});
</script>

<template>
  <div class="page">
    <p>Weather Forecast</p>
    <div v-if="weatherStore.isLoading">Loading...</div>
    <div v-else-if="weatherStore.error">{{ weatherStore.error }}</div>
    <div v-else class="weather-forecast">
      <WeatherBlock
        v-for="forecast in weatherStore.forecasts"
        :key="forecast.date"
        :forecast="forecast"
      />
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
