<template>
	<div>
		<nav-bar title="newsdetail"></nav-bar>
		<img :src="img.src" alt="">
		<ul><li v-for="review in reviews">{{review.user}}<span>&nbsp; say &nbsp;</span>{{review.comment}}</li><!-- <li>{{review.comment}}</li> --></ul>
		<span>ur comment</span>
		<input type="text" v-model="mycomment">
		<button @click="sendcomment">submit</button>
		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				img:{},
				reviews:[],
				mycomment:''
			}

			
		},
		created(){
			let id=this.$route.params.id
			console.log('param',this.$route.params.id)
			this.$ajax.get('newsdetail?id='+id).then(res=>{
				this.img=res.data.img
				this.reviews=res.data.review
				console.log(this.reviews)
			})
		},
		methods:{
			sendcomment(){
			console.log(this.mycomment)
			}
		}

}
</script>

<style scoped="">
img {
	height: 100px;
}
</style>