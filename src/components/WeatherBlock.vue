<script setup lang="ts">
import type { WeatherForecast } from "../types/weather-types";
import { useWeatherStore } from "../stores/useWeatherStore";

const props = defineProps<{
  forecast: WeatherForecast;
}>();

const weatherStore = useWeatherStore();
</script>

<template>
  <div class="weather">
    <div class="info">
      <p class="info__celsius">{{ forecast.temperature }}°</p>
      <p class="info__information">
        <span class="info__information__temperature"
          >H:{{ forecast.maxTemp }}° L:{{ forecast.minTemp }}°</span
        ><br />
        <span class="info__information__town">Tbilisi, Georgia</span><br />
        <span class="info__information__week-day">{{ forecast.weekDay }}</span>
      </p>
    </div>

    <div class="forecast">
      <img
        class="forecast__image"
        :src="`/src/assets/${weatherStore.getWeatherIcon(
          forecast.weatherCode
        )}`"
        :alt="weatherStore.getWeatherDescription(forecast.weatherCode)"
      />
      <p class="forecast__forecast-info">
        {{ weatherStore.getWeatherDescription(forecast.weatherCode) }}
      </p>
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

    margin-bottom: 20px;
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
      color: #ebebf599;
    }

    &__town {
      color: #ffffff;
    }
  }
}

.forecast {
  width: 164px;
  margin: -23px 4px 20px 0px;

  &__forecast-info {
    color: #ffffff;
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
