<template lang="pug">
    .app_contain
        .inlinetop.margin10
            a.btn(href="javascript:;", @click="toast") simple toast
        .inlinetop.margin10
            a.btn(href="javascript:;", @click="alert") simple alert
        .inlinetop.margin10
            a.btn(href="javascript:;", @click="confirm") simple confirm
        .inlinetop.margin10
            a.btn(href="javascript:;", @click="loading") simple loading

</template>

<script>

	export default {
		methods: {
			toast(){
				this.$toast({msg: 'This is a toast'});
			},
			alert(){
				this.$alert({content: 'This is a alert'});
			},
			confirm(){
				this.$confirm({content: 'This is a confirm'});
			},
			loading(){
				this.$loading();
			},
		}
	}
</script>
