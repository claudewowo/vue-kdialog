<template lang="pug">
  .pages
    .beforeUse
      h2 Ready to use:
      h3 1, import
      pre
        code
          | import Vue from 'vue';
          | import kdialog from 'vue-kdialog'; // transformed by pilyfill-babel
          | // or import kdialog from 'vue-kdialog/src/keydialog.js'; // no transformed
          | Vue.use(kdialog);
      h3 2, with css
      pre
        code
          | import Vue from 'vue';
          | import kdialog from 'vue-kdialog'; // only nodeElement
          | import 'vue-kdialog/src/keydialog_pc.css'; // css for PC
          | Vue.use(kdialog);
      h2 Global function
      h3 1, event bus
      pre
        code
          | import Vue from 'vue';
          | import kdialog from 'vue-kdialog'; // only nodeElement
          | import 'vue-kdialog/src/keydialog_pc.css'; // css for PC
          | Vue.use(kdialog);
          | kdialog.eventbus(); // init the eventbus, the bus will be mounted to Vue prototype (全局使用eventbus事件，并挂载到vue原型上)
      h3 2, set language
      pre
        code
          | import Vue from 'vue';
          | import kdialog from 'vue-kdialog'; // only nodeElement
          | import 'vue-kdialog/src/keydialog_pc.css'; // css for PC
          | Vue.use(kdialog);
          | kdialog.setLanguage('en'); // only can be 'en'/'zh-cn'
          | /* or
          | kdialog.setLanguage({
          |    ok: 'OK',
          |    confirm: 'Confirm',
          |    cancel: 'cancel'
          | }); */

</template>

<script>
  export default {
    methods: {
      loading() {
        this.$loading();
      },
      toast() {
        this.$toast({ msg: "This is a toast" });
      }
    }
  };
</script>

<style lang="postcss">

</style>
