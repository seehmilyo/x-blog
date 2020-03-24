<template>
  <div>
	  <h2>learn</h2>
	  <div @click="netRequest">提交</div>
	  <input type="file" name="word" placeholder="" ref="file" multiple>
	  
  </div>
</template>

<script>
	
  export default {
    name: "learn",
	data() {
		return {
			data:''
		}
	},
	methods: {
		netRequest(){
			let formData = new FormData()
			this.data = this.$refs.file.files[0]
			formData.append('word', this.data)
			// for(let key in formData.keys())
			// console.log(formData.keys());
			this.$axios.post('http://localhost:8081/upLoad',formData)
			.then(res => {
				console.log('reuturn data:' + res.data);
				})
			.catch(err => {
				 console.log(err);
			   })
		}
	}
  }
</script>

<style scoped>

</style>