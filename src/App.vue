<template>
  <div id="app">
    <VehicleLanding />
  </div>
</template>

<script>
import VehicleLanding from "@/views/VehicleLanding.vue";

export default {
  name: "App",
  components: { VehicleLanding },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #FFF;
  color: #333;
  line-height: 1.6;
}
</style>
