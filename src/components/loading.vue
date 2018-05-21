<template lang="pug">
  .pages
    .alertEx
      h2 Normal Useage:
      h3 show loading
      h4 code:
      pre
        code
          | In your vue component:
          hr
          | {{case_0}}

      h4 test:
      .btn_wrap.paddingB50
        span.btn(@click="loading") simple loading
        | &nbsp;&nbsp;&nbsp;&nbsp;(click anywhere to close this loading)

      h3 close loading
      h4 code:
      pre
        code
          | In your vue component:
          hr
          | {{case_1}}

      hr
      h2 Advance Useage:
      h3 show toast
      h4 code:
      pre
        code
          | In your vue component:
          hr
          | {{case_2}}
      h4 test:
      .btn_wrap.paddingB50
        span.btn(@click="toast") simple toast
      h3 custom toast animation
      h4 code:
      pre
        code
          | In your vue component:
          hr
          | {{case_3}}
      h4 test:
      .btn_wrap.paddingB50
        span.btn(@click="toast_transition") custom toast animation

      h3 toast callback
      h4 code:
      pre
        code
          | In your vue component:
          hr
          | {{case_4}}
      h4 test:
      .btn_wrap.paddingB50
        span.btn(@click="toast_call") toast with callback
      
</template>

<script>
  /* eslint-disable */
  export default {
      data() {
          return {
              init: true,
              case_0: `
              export default {
                  created:{
                      this.$loading();
                  }
              }`,
              case_1: `
              export default {
                  methods:{
                      loading(){
                          const loading = this.$loading();
                          setTimeout(() => {
                              loading.close(); // (this loading will be closed after 2000ms)
                          }, 2000);
                      },
                  }
              }`,
              case_2: `
              export default {
                  created:{
                      this.$toast({ msg: 'This is a toast', timer: 2500 });
                  }
              }`,
              case_3: `
              <script>
              export default {
                  created:{
                      this.$toast({
                          customClass: 'customTranstion',
                          msg: "This is a toast width custom transtion",
                      });
                  }
              }
              \<\/script>

              <style lang="scss">
                  .customTranstion{
                      .kdialog_msg{transform: translateY(50%) scale(1);}
                      &.modal_enter, &.modal_leave{
                          .kdialog_msg{transition-timing-function: initial;}
                      }
                      &.modal_enter .kdialog_msg{transform: translateY(0) scale(1);}
                      &.modal_leave .kdialog_msg{transform: translateY(-50%) scale(1);}
                  }
              </style>`,
              case_4: `
              export default {
                  created:{
                      this.$toast({ msg: 'This is a toast', ok: (dialog) => {
                          dialog.close();
                          setTimeout(()=>{
                              this.$toast({ msg: "last toast was closed" });
                          }, 300);
                      } });
                  }
              }`,
          };
      },
      created() {
          window.addEventListener('click', () => {
              if (!this.init) {
                  this._loading.close();
                  this.init = true;
              }
          }, false);
      },
      methods: {
          loading() {
              this._loading = this.$loading();
              setTimeout(() => {
                  this.init = false;
              }, 500);
          },
          toast() {
              this.$toast({ msg: 'This is a toast' });
          },
          toast_transition() {
              this.$toast({
                  customClass: 'customTranstion',
                  msg: 'This is a toast width custom transtion',
              });
          },
          toast_call() {
              this.$toast({
                  msg: 'This is a toast',
                  ok: (dialog) => {
                      dialog.close();
                      setTimeout(() => {
                          this.$toast({ msg: 'last toast was closed' });
                      }, 300);
                  }
              });
          }
      }
  };
</script>

<style lang="postcss">
  .customTranstion{
    .kdialog_msg{transform: translateY(50%) scale(1);}
    &.modal_enter, &.modal_leave{
      .kdialog_msg{transition-timing-function: initial;}
    }
    &.modal_enter .kdialog_msg{transform: translateY(0) scale(1);}
    &.modal_leave .kdialog_msg{transform: translateY(-50%) scale(1);}
  }
</style>
