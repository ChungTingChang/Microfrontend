<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <h3>
    <img v-if="imgSrc" :src="imgSrc" />
    {{ title }}
  </h3>
</template>
