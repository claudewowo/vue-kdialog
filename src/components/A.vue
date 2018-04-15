<template lang="pug">
  ul.forms
    li
      .title This is a coupon
        span.getit.btn(@click="getit") Get it
    li
      .title This is a coupon
        span.getit.btn(@click="getit") Get it
    li
      .title This is a coupon
        span.getit.btn(@click="getit") Get it
      
</template>

<script>
  export default {
    methods: {
      getit() {
        this.$toast({
          msg: 'got it!'
        });
      }
    }
  };
</script>

<style lang="postcss">
  dl{
    height:30px;
    line-height:30px;
    margin-bottom: 10px;
    white-space: nowrap;
  }
  dt, dd{
    display: inline-block;
    vertical-align: top;
  }
  dt{width:60px;}
  .input{
    border: 1px solid #999;
    padding:5px 10px;
    border-radius:4px;
    color: #333;
  }
  li{padding:5px;}
  .getit{
    height: 22px;
    line-height: 22px;
    margin-left:10px;
  }
</style>
