<template>
  <div>
    <detail-tittle-navbar/>
  </div>
</template>

<script>
import DetailTittleNavbar from "./childComp/DetailTittleNavbar";

export default {
  name: "Detail",
  components: {DetailTittleNavbar},
  component: {
    DetailTittleNavbar
  },
  data() {
    return {
      iid: null
    }
  },
  created() {
    this.iid = this.$route.params.iid
  }
}
</script>

<style scoped>

</style>
