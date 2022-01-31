<template>
  <div>
    <h1>Hello</h1>
    <button @click="showToast">Click to show toast</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    //
  }
})
export default class HelloWorld extends Vue {
  public showToast() {
    this.$toast.open({
      message: `This is a toast!`,
      type: "success"
    })
  }
}
</script>
<style>

</style>
