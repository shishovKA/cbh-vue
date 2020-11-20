<template>
  <div class="sidebar">
    <h2>My portfolios</h2>
    <div class="sidebar__menu-container">
    
      <SidebarItem
        v-for="(sidebarItem, index) in this.$store.state.sidebarData"
        v-bind:name="sidebarItem.name"
        v-bind:selected="sidebarItem.selected"
        v-bind:score="sidebarItem.score"
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
  min-height: calc(100vh - 100px - 52px);
  width: 100%;
  max-width: 272px;
  display: flex;
  flex-direction: column;

  background-color: rgba($color: #343E47, $alpha: 0.04);
}

.sidebar__menu-container {
    width: 100%;
}
</style>