<script lang="ts">
import { ref } from 'vue'
import HeaderLayout from './header-layout.vue'
import FooterLayout from './footer-layout.vue'

// [React] import method and component from user-management-portal project
import renderReactElement from 'userManagementPortal/renderReactElement'
import withReducer from 'userManagementPortal/withReducer'
import { SwitchUserInput } from 'userManagementPortal/UserManagementPortalComponents'

export default {
  setup() {
    const switchUserRef = ref(null)
    return {
      switchUserRef
    }
  },
  components: {
    HeaderLayout,
    FooterLayout
  },
  mounted() {
    renderReactElement(SwitchUserInput, this.$refs['switchUserRef'])
  }
}
</script>

<template>
  <div>
    <header-layout>
      <template #header-content>
        <div id="switch-user" ref="switchUserRef" />
      </template>
    </header-layout>
    <main>
      <slot name="main" />
    </main>
    <footer-layout />
  </div>
</template>

<style lang="scss" scoped>
main {
  border: var(--border-width) solid var(--main-color);
  background-color: var(--main-background-color);
  height: calc(100vh - var(--header-height) - var(--footer-height));

  > div {
    height: 100%;
  }
}
</style>
