<template>
	<div>
		
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(img,index) in imgs" :key="index"><a :href="img.url"><img :src="img.src" alt=""></a></mt-swipe-item>
		  
		</mt-swipe>

		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
		                    <router-link  :to="{name:'news'}"><span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            
		        </ul> 
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				imgs:[],
			}
		},
		created(){
			this.$ajax.get('getlunbo').then(res=>{
				this.imgs=res.data.imgs
				console.log(res.data.imgs)
			})
		}
	}
</script>

<style scoped>
	.mint-swipe img {
		 height:  100%;

	 }
	 .mint-swipe {
		 height: 200px;
	 }
	.mui-table-view.mui-grid-view.mui-grid-9{
		background-color: white;
		border: 0;
		margin-top: 0px;
	}


</style>