<template>
	<div>
		<nav-bar title="news"></nav-bar>
		<ul class="mui-table-view">
    <li v-for="(news,index) in newsList" class="mui-table-view-cell mui-media">

        <router-link :to="{name:'newsdetail',params:{id:index}}">
            <img class="mui-media-object mui-pull-left" src="../static/img/news/1.png">
           
            <div class="mui-media-body">
                {{news.title}}
                <p class='mui-ellipsis'>{{news.content}}</p>
            </div>
        </router-link>
    </li>
   
</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				newsList:[]

			}
		},
			created(){
				this.$ajax.get('newsList').then(res=>{
					this.newsList=res.data
				})
			}
			
	}
		
</script>

<style>

</style>