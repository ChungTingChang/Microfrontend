<script lang="ts">
import { ref } from 'vue'
import PageTitle from '../Units/page-title.vue'

// [React] import method and component from user-management-portal project
import renderReactElement from 'userManagementPortal/renderReactElement'
import { getUsers } from 'userManagementPortal/UserManagementStore'
import { Profile } from 'userManagementPortal/UserManagementPortalComponents'

// [Angular] import method and component from roles-management-portal project
// import('rolesManagementPortal/RolesSelectorComponent')

export default {
  setup() {
    const profileRef = ref(null)
    return {
      profileRef
    }
  },
  components: {
    PageTitle
  },
  data() {
    return {
      users: [],
      filteredUsers: []
    }
  },
  mounted() {
    // console.log(SelectorComponent)
    this.getUsersFromRemote()
  },
  methods: {
    async getUsersFromRemote() {
      this.users = await getUsers()
    },
    renderUserComponents(list) {
      const rendered = list.reduce(
        (prev, { userName, src }) => ({
          components: [...prev.components, Profile],
          props: [
            ...prev.props,
            {
              key: userName,
              name: userName,
              photo: src,
              photoSize: 50
            }
          ]
        }),
        { components: [], props: [] }
      )
      renderReactElement(rendered.components, this.$refs['profileRef'], rendered.props)
    },
    changeRole(role) {
      this.filteredUsers = this.users.filter((user) => user.roles.includes(role))
    }
  },
  watch: {
    users(newValue) {
      if (!newValue.length) return
      this.filteredUsers = newValue
    },
    filteredUsers(newValue) {
      this.renderUserComponents(newValue)
    }
  }
}
</script>

<template>
  <div id="home-page">
    <page-title title="HOME" imgSrc="../../public/favicon.ico" />
    <hr />
    <div ref="profileRef" />
  </div>
</template>

<style lang="scss" scoped>
#home-page {
  padding: 40px 60px 60px;
}
</style>
