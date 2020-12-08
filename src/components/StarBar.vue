<template>
  
  <div>
  <p class="star-bar" v-bind:class="color">{{starBar}}<span class="star-bar star-color-end">{{starBarEnd}}</span></p>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class StarBar extends Vue {
  @Prop()  private value!: number;
  @Prop()  private mode!: string;

  private char: string  = '★';
  private colorList: string[] = ['star-color1','star-color2','star-color3','star-color4','star-color5'];

  get starBar(): string {
    let result = '';
    for (let i=0; i<Math.floor(this.value); i++) {
      result = result + this.char;
    }
    return result;
  }

    get starBarEnd(): string {
    let result = '';
    for (let i=0; i<(5-Math.floor(this.value)); i++) {
      result = result + this.char;
    }

    if (this.mode == 'full') {
      return result;
    }
    else {
      return '';
    }
    
  }

  get color() {
    let className = this.colorList[Math.floor(this.value)-1];
    return {[className]: true}
  }


}

</script>

<style scoped lang="scss">


.star-bar {
  margin: 0;
  padding: 0;
}

.star-color-end {
  color: #D8D8D8;
}

.star-color1 {
  color: #E65049;
}

.star-color2 {
  color: #E65049;
}

.star-color3 {
  color: #D4B22B;
}

.star-color4 {
  color: #AECF57;
}

.star-color5 {
  color: #5FBF4A;
}


</style>