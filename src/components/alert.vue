<template lang="pug">
  .pages
    .alertEx
      h2 Normal Useage:
      h3 show alert
      h4 code:
      pre
        code
          | In your vue component:
          hr
          | {{case_0}}

      h4 test:
      .btn_wrap.paddingB50
        span.btn(@click="alert") simple alert

      h3 alert with callback
      h4 code:
      pre
        code
          | In your vue component:
          hr
          | {{case_1}}
      h4 test:
      .btn_wrap.paddingB50
        span.btn(@click="alert_callback") alert with callback

      hr
      h2 Advance Useage:
      h3 alert with component
      h4 code:
      pre
        code
          | In your vue component:
          hr
          | {{case_2}}
          hr
          | In componentA:
          | {{case_3}}
      h4 test:
      .btn_wrap.paddingB50
        span.btn(@click="alert_component") alert with component

      h3 alert/confirm with event bus
      h4 code:
      pre
        code
          | First: In App.js
          | &nbsp;&nbsp;Vue.use(KeyDialog); // use KeyDialog
          | &nbsp;&nbsp;KeyDialog.eventbus(); // use event bus
          hr
          | second: in your vue component:
          | {{case_4}}
          hr
          | In componentB:
          | {{case_5}}
      h4 test:
      .btn_wrap.paddingB50
        span.btn(@click="confirm_eventbus") alert/confirm with eventbus

      h3 confirm show from bottom
      h4 code:
      pre
        code
          | In your vue component:
          hr
          | {{case_6}}
      h4 test:
      .btn_wrap.paddingB50
        span.btn(@click="confirm_from") confirm show from bottom

</template>

<script>
  import componentA from './A.vue';
  import componentB from './B.vue';
  export default {
    data(){
      return{
        init: true,
        case_0: `
        export default {
            created:{
                this.$alert({
                    title: '<h3 style="margin-left:-12px;">title with html</h3>',
                    content: 'This is a alert!'
                });
            }
        }`,
        case_1: `
        export default {
            created:{
                this.$alert({
                    title: '<h3 style="margin-left:-12px;">title with html</h3>',
                    content: 'This is a alert! (width : 250px)',
                    shadowClose: true,
                    width: '250px',
                    ok(dialog){
                        dialog.content = '<h3 style="font-weight:bold;">callback...</h3>';
                        dialog.okText = 'OK';
                    }
                });
            }
        }`,
        case_2: `
        import componentA from 'A.vue';
        export default {
            created:{
                this.$alert({
                    title: 'Get your coupons',
                    component: componentA,
                    width: '230px',
                    ok(dialog){
                        console.log(dialog);
                    }
                });
            }
        }`,
        case_3: `
        <template>
          <ul class="forms">
              <li>
                  <div class="title">This is a coupon
                      <span class="getit btn" @click="getit">Get it</span>
                  </div>
                  <div class="title">This is a coupon
                      <span class="getit btn" @click="getit">Get it</span>
                  </div>
                  <div class="title">This is a coupon
                      <span class="getit btn" @click="getit">Get it</span>
                  </div>
              </li>
          </ul>
        </template>`,
        case_4: `
        import componentB from 'B.vue';
        export default {
            created:{
                this.$bus.$on('okEvent', data => {
                    if(data.$dialog.$children[0].Age == ''){
                        data.$dialog.submiting = false;
                        return this.$toast({ msg: 'Can\'t be empty' });
                    }
                    this.$toast({ msg: \`Your Age is: \${data.$dialog.$children[0].Age}\`, ok(toast){
                        data.$dialog.close();
                        toast.close();
                    } });
                });
                this.$bus.$on('cancelEvent', data => {
                    data.$dialog.close();
                    console.log('closed by your hand');
                });
            }
        }`,
        case_5: `
        <template>
            <div class="forms">
                <input class="input" type="text" v-model="Age" placeholder="Your Age">
            </div>
        </template>

        <script>
            export default {
                data(){
                    return{
                        Age: ''
                    }
                },
            };
        \<\/script>`,
        case_6: `
        export default {
            created:{
                confirm_from(){
                    this.$confirm({
                        rollfrom:'bottom',
                        confirmText:'confirm',
                        title: 'show from bottom',
                        content: 'confirm show from bottom. This is nice in mobile',
                    });
                }
            }
        };
        `,
      }
    },
    created () {
      window.addEventListener('click', ()=>{
        if(!this.init){
          this._loading.close();
          this.init = true;
        }
      }, false);
      this.$bus.$on('okEvent', data => {
        if(data.$dialog.$children[0].Age == ''){
          data.$dialog.submiting = false;
          return this.$toast({ msg: 'Can\'t be empty' });
        }
        this.$toast({ msg: `Your Age is: ${data.$dialog.$children[0].Age}`, ok(toast){
          data.$dialog.close();
          toast.close();
        } });
      });
      this.$bus.$on('cancelEvent', data => {
        data.$dialog.close();
        console.log('closed by your hand');
      });
    },
    methods: {
      alert() {
        this.$alert({
          title: '<h3 style="margin-left:-12px;">title with html</h3>',
          content: 'This is a alert!'
        });
      },
      alert_callback() {
        this.$alert({
          title: '<h3 style="margin-left:-12px;">title with html</h3>',
          content:　'This is a alert! (width : 250px)',
          shadowClose: false,
          width: '250px',
          ok(dialog){
            dialog.content = '<h2 style="font-weight:bold;">callback...</h2>';
            dialog.okText = 'OK';
          }
        });
      },
      alert_component(){
        this.$alert({
          title: 'Get your coupons',
          component: componentA,
          width: '230px',
          ok(dialog){
            dialog.close();
          }
        });
      },
      confirm_eventbus(){
        this.$confirm({
          title: 'test for event bus',
          content: 'click buttons bellow to show result.',
          component: componentB,
          okEvent:'okEvent',
          cancelEvent:'cancelEvent',
        });
      },
      confirm_from(){
        this.$confirm({
          rollfrom:'bottom',
          confirmText:'confirm',
          title: 'show from bottom',
          content: 'confirm show from bottom. This is nice in mobile',
        });
      }
    }
  };
</script>
