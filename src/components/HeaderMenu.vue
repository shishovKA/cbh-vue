<template>
  <div class="container">
    <div class="menu">
    <HeaderMenuItem
      v-for="(menuItem, index) in this.$store.state.Header.data"
      v-bind:title="menuItem.title"
      v-bind:selected="menuItem.selected"
      v-bind:index="index"
      v-bind:key="index"
    >
    </HeaderMenuItem>
    </div>
    <div class="upload__btn"><img class="upload__icon" src="../assets/upload-icon.svg">Data Upload</div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HeaderMenuItem from './HeaderMenuItem.vue';

@Component({
  components: {
    HeaderMenuItem,
  },
})

export default class HeaderMenu extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">

.container {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #202A33;
  height: 52px;
}

.upload__btn {
  margin-right: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;

  height: 38px;

  border: 1px solid #595959;
  box-sizing: border-box;
  border-radius: 6px;

  font-family: Akkurat Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.03em;

  color: #FFFFFF;

  cursor: pointer;

}

.menu {
  height: 100%;
  display: flex;
}

.upload__icon {
  margin-right: 10px;
  width: 10.5px;
  height: 14.5px;
}

</style>
