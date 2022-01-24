<template>
  <div class="home">
    <TheLanding/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheLanding from '@/components/TheLanding.vue'

export default {
  name: 'Home',
  components: {
    TheLanding
  }
}
</script>
