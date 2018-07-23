<template>
  <div class="hello">
    <pre>{{content}}</pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    let url = 'https://www.sojson.com/open/api/weather/json.shtml?city=%E5%8C%97%E4%BA%AC'
    this.axios.get(url).then(response => {
      console.info(response)
      this.content = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
