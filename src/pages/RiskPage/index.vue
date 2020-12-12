<template>
  <div>
    <HeaderMenu />
    <div class="page__container">
      <Sidebar />
      
      <div v-if="this.$store.getters.curPortfolioJSON" class="page">
        
        <div class="title__container">
          <h1 class="title">Portfolio Risk <span class="title title_notbold">{{this.$store.getters.curPortfolioJSON.name}}</span></h1>
          <p class="title__value">  
            <span class="title__value_gray">Portfolio Value</span>
            <span class="title__value_black">{{ this.$store.getters["RiskPageModule/value"] }}</span>
          </p>
        </div>

        <div class="valuebox__container">
          
          <div class="valuebox">
            <h2 class="valuebox__title">Overall Portfolio Risk Score</h2>
            <p class="valuebox__value">
              {{ this.$store.getters["RiskPageModule/riskScore"] }}
              <StarBar class="valuebox__star"
                v-bind:value='this.$store.getters["RiskPageModule/riskScore"]'
                v-bind:mode="'full'"
              />
            </p>
          </div>

          <div class="valuebox">
            <h2 class="valuebox__title">Cyber based Discount to Fair Value</h2>
            <p class="valuebox__value">
              <span class="valuebox__value_red">{{ this.$store.getters["RiskPageModule/discount"] }}%</span>
              <span>{{ this.$store.getters["RiskPageModule/fairValue"] }}</span>
            </p>
            
          </div>

        </div>

        <div class="table__container">
          <Table
            v-bind:headers="this.$store.state.RiskPageModule.headers"
            v-bind:tableArr="this.$store.getters['RiskPageModule/tableArr']"
          >
          </Table>
          <div class="col-divider"></div>
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Sidebar from "../../components/Sidebar.vue";
import HeaderMenu from "../../components/HeaderMenu.vue";
import Table from "./Table.vue";
import StarBar from '../../components/StarBar.vue'

@Component({
  components: {
    Sidebar,
    HeaderMenu,
    Table,
    StarBar,
  },
})
export default class RiskPage extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.col-divider {
  position: absolute;
  height: calc(100% - 30px);
  border-right: 1px dashed #202A33;
  top: 38px;
  right: calc(131px + 67px);
}

.valuebox__star {
  margin-left: 8px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 33.8356px;
  line-height: 41px;

  display: flex;
  align-items: center;
  height: 57px;
}


.page__container {
  display: flex;
  justify-content: stretch;
}

.page {
  box-sizing: border-box;
  background-color: #ffffff;
  min-height: calc(100vh - 100px - 52px);
  display: flex;
  flex-direction: column;
  color: black;
  flex-basis: 100%;
}

.title__container {
  box-sizing: border-box;
  margin: 0;
  margin-top: 52px;
  margin-left: 88px;
  margin-right: 83px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  margin: 0;
  font-family: Inter;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
}

.title_notbold {
  font-weight: 400;
}

.title__value {
  box-sizing: border-box;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  height: 35px;
  background: rgba(191, 193, 195, 0.21);
  border-radius: 6px;
}

.title__value_black {
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  opacity: 1;
  color: #202A33;
}

.title__value_gray {
  margin-right: 10px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: #666D7D;
  opacity: 0.7;
}

.valuebox__container {
  box-sizing: border-box;
  margin: 0;
  margin-top: 24px;
  margin-left: 88px;
  margin-right: 83px;
  margin-bottom: 80px;
  display: flex;
}

.valuebox__title {
  margin: 0;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;

}

.valuebox {
  margin-right: 50px;
}

.valuebox__value {
  margin: 0px;
  margin-top: 20px;
  font-family: Inter;
  font-size: 47px;
  font-style: normal;
  font-weight: 700;
  line-height: 57px;
  letter-spacing: -0.02em;

  display: flex;
  align-items: center;
}

.valuebox__value_red {
  background: #E65049;
  border-radius: 7.21429px;
  color: #FFFFFF;
  padding: 3.5px 12.63px;

  font-family: Inter;
  font-size: 31px;
  font-style: normal;
  font-weight: 700;
  line-height: 37px;
  letter-spacing: 0em;

  margin-right: 15px;
}


</style>