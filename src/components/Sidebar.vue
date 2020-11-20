<template>
  <div class="sidebar">
    <h2>My portfolios</h2>
    <div class="sidebar__menu-container">
      <SidebarItem
        v-for="(sidebarItem, index) in this.$store.state.sidebarData"
        v-bind:name="menuItem.name"
        v-bind:score="menuItem.score"
        v-bind:index="index"
        v-bind:key="index"
      >
      </SidebarItem>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SidebarItem from "./SidebarItem.vue";

@Component({
  components: {
    SidebarItem,
  },
})
export default class Sidebar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
  box-sizing: border-box;
  background-color: #343E47;
  opacity: 0.04;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar__menu-container {

}
</style>