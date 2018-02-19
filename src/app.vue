<template>
	<div>
		
		<mt-header title="index"></mt-header>
		<router-view> </router-view>
		<nav class="mui-bar mui-bar-tab">
		<router-link class="mui-tab-item" :to="{name:'home'}"><span class="mui-icon icon-shouye"></span><span class="mui-tab-label">home</span></router-link>
		<router-link class="mui-tab-item" :to="{name:'gouwuche'}"><span class="mui-icon icon-gouwuche"></span><span class="mui-tab-label">cart</span></router-link>
		<router-link class="mui-tab-item" :to="{name:'search'}"><span class="mui-icon mui-icon-search"></span><span class="mui-tab-label">search</span></router-link>
		</nav>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				heros:[{name:'jack'},{name:'rose'}]
			}
		},
		created(){
			
		}
	}
</script>

<style >

</style>