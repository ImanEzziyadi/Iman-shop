<template>
  <div>
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['checkUser'])
  },
  created() {
    this.checkUser()
  }
}
</script>

<style>

</style>
