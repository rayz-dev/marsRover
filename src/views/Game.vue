<template>
  <div class="game">
    <h1>{{ title }}</h1>
    <TheGameCanvas/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheGameCanvas from '@/components/TheGameCanvas.vue'

export default {
  name: 'Game',
  components: {
    TheGameCanvas
  },
  data() {
    return {
      title: "Planet Mars"
    }
  }
}
</script>

<style scoped>
</style>