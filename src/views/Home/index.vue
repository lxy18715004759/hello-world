<template>
  <div class="page">
    <WorldMap></WorldMap>
  </div>
</template>
<script>
import WorldMap from "@/components/WorldMap";
export default {
  name: "Home",
  components: { WorldMap },
  data() {
    return {};
  },
  mounted() {
    let { init } = this;
    init();
  },
  methods: {
    init() {}
  }
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 10px;
}
.page{
  width:100%;
  height: 100%;
}
</style>
