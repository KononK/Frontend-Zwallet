<template>
  <div>
    <b-nav vertical class="ml-auto font-17">
      <b-nav-item
        :to="{ name: 'Dashboard' }"
        :active-class="currentRoute === 'Dashboard' ? 'active' : ''"
        class="my-2 font-17"
      >
        <b-icon icon="grid" class="mr-3"></b-icon> Dashboard</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'Transfer' }"
        class="my-2 font-17"
        :active-class="currentRoute === 'Transfer' ? 'active' : ''"
      >
        <b-icon icon="arrow-up" class="mr-3"></b-icon> Transfer</b-nav-item
      >
      <b-nav-item
        :active-class="currentRoute === 'TopUp' ? 'active' : ''"
        v-if="getMyProfile.roleId === 2"
        :to="{ name: 'TopUp' }"
        class="my-2 font-17"
      >
        <b-icon icon="plus" class="mr-3"></b-icon> Top Up</b-nav-item
      >

      <b-nav-item
        :active-class="currentRoute === 'DataTopUp' ? 'active' : ''"
        v-if="getMyProfile.roleId === 1"
        :to="{ name: 'DataTopUp' }"
        class="my-2 font-17"
      >
        <b-icon icon="shift" class="mr-3"></b-icon> Data Top Up</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'Profile' }"
        :active-class="currentRoute === 'Profile' ? 'active' : ''"
        class="my-2 font-17"
      >
        <b-icon icon="person" class="mr-3"></b-icon> Profile</b-nav-item
      >
      <b-nav-item class="my-2 logout font-17" @click="handleLogout"
        ><b-icon icon="box-arrow-right" class="mr-3"></b-icon>
        Logout</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  methods: {
    ...mapActions('auth', ['interceptorsRequest', 'interceptorsResponse']),
    handleLogout() {
      this.logoutMixin()
    }
  },
  mounted() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  },
  computed: {
    ...mapGetters('user', ['getMyProfile']),
    currentRoute() {
      return this.$route.name
    }
  }
}
</script>

<style scoped>
.nav {
  min-height: 100vh;
  padding: 25px 0;
  position: relative;
  background: #ffffff;
  border-radius: 25px;
}
@media screen and (max-width: 767px) {
  .nav {
    height: auto;
  }
  .logout {
    position: relative !important;
    bottom: 0 !important;
  }
}
a {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 31px;
  letter-spacing: 1px;
  color: rgba(58, 61, 66, 0.8);
}

.active {
  border-left: 4px solid #6379f4 !important;
  font-weight: 700;
  color: #6379f4 !important;
}

.logout {
  position: absolute;
  bottom: 20px;
}
.router {
  text-decoration: none;
}
.router:active {
  border-left: none;
}
</style>
