<template lang="pug">
  .pages
    .beforeUse
      h2 Ready to use:
      h3 1, import
      pre
        code
          | import Vue from 'vue';
          | import kdialog from 'vue-kdialog';
          | Vue.use(kdialog);
      h3 2, with css
      pre
        code
          | import Vue from 'vue';
          | import kdialog from 'vue-kdialog'; // only nodeElement
          | import 'vue-kdialog/src/keydialog_pc.css'; // css for PC
          | // import 'vue-kdialog/src/keydialog_m.css'; // css for mobile
          | Vue.use(kdialog);
      h3 3, use event bus
      pre
        code
          | import Vue from 'vue';
          | import kdialog from 'vue-kdialog'; // only nodeElement
          | import 'vue-kdialog/src/keydialog_pc.css'; // css for PC
          | Vue.use(kdialog);
          | kdialog.eventbus(); // init the eventbus, the bus will be mounted to Vue prototype (全局使用eventbus事件，并挂载到vue原型上)

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
