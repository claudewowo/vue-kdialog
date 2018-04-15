<template lang="pug">
  .forms
    input.input(type="text", v-model="Age", placeholder="Your Age")

</template>

<script>
  export default {
    data(){
      return{
        Age: ''
      }
    },
  };
</script>

<style lang="postcss">
  .input{
    width: 236px;
    border: 1px solid #999;
    padding:5px 10px;
    border-radius:4px;
    color: #333;
  }
</style>
