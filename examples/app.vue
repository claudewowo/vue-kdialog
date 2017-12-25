<template lang="pug">
    .app_contain
        p
            a(href="javascript:;", @click="toast") test toast
        p
            a(href="javascript:;", @click="alert") test alert
        p
            a(href="javascript:;", @click="confirm") test confirm
        p
            a(href="javascript:;", @click="loading") test loading
        
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		components: {
			
		},
		methods: {
			toast(){
				this.$toast({msg:'This is a toast'});
			},
			alert(){
				this.$alert({content:'This is a alert'});
			},
			confirm(){
				this.$confirm({content:'This is a confirm'});
			},
			loading(){
				this.$loading();
			},

		}
	}
</script>