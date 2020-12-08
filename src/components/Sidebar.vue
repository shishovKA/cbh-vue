<template>
  <div class="sidebar">

    <p class="sidebar__title">My portfolios</p>

    <div class="sidebar__menu-container">
      <SidebarItem
        v-for="(sidebarItem, index) in this.$store.state.SideBar.data"
        v-bind:name="sidebarItem.name"
        v-bind:selected="sidebarItem.selected"
        v-bind:score="sidebarItem.score"
        v-bind:id="sidebarItem.id"
        v-bind:index="index"
        v-bind:key="index"
      >
      </SidebarItem>

    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import SidebarItem from './SidebarItem.vue';

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
  background-color: #F7F7F8; 
}

.sidebar__title {
  height: 113px;
  margin: 0;
  padding: 0px 0px 18px 24px;

  display: flex;
  align-items: flex-end;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0.05em;

  text-transform: uppercase;
  color: #000000;
  opacity: 0.3;
}

.sidebar__menu-container {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, .1);;
}
</style>