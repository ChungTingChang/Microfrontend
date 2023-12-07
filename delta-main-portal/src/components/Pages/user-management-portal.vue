<script lang="ts">
import { ref } from 'vue'

// [React] import method and component from user-management-portal project
import renderReactElement from 'userManagementPortal/renderReactElement'
import withReducer from 'userManagementPortal/withReducer'
import { Users } from 'userManagementPortal/UserManagementPortalPages'
import UserManagementStore from 'userManagementPortal/UserManagementStore'

export default {
  setup() {
    const pageRef = ref(null)
    return {
      pageRef
    }
  },
  data() {
    return {
      users: UserManagementStore
    }
  },
  mounted() {
    renderReactElement(withReducer, this.$refs['pageRef'], {
      children: Users
    })
  },
  watch: {
    users(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>

<template>
  <div id="user-page" ref="pageRef" />
</template>
