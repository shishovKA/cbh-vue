<template>
  <div class="container container_navbar">
    <HeaderMenuItem
      v-for="(menuItem, index) in this.$store.state.headerMenuData"
      v-bind:title="menuItem.title"
      v-bind:selected="menuItem.selected"
      v-bind:key="index"
    >
    </HeaderMenuItem>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HeaderMenuItem from "./HeaderMenuItem.vue"

@Component({
  components: {
    HeaderMenuItem
  },
})

export default class HeaderMenu extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">

.container {
  box-sizing: border-box;
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.container_navbar {
  background-color: #202A33;
  justify-content: start;
  height: 52px;
}

</style>
