<script lang="ts">
import pJson from './../../../package.json'

export default {
  data() {
    const date = new Date()
    return { year: date.getFullYear(), version: pJson.version }
  }
}
</script>

<template>
  <footer>
    <span> &copy; {{ year }} Delta IT. All Rights Reserved. Version {{ version }}</span>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  align-items: center;
  border: var(--border-width) solid var(--main-color);
  background-color: var(--secondary-color);
  color: var(--font-main-color);
  display: flex;
  font-size: 11px;
  height: var(--footer-height);
  justify-content: center;
  padding-block: 10px;
}
</style>
