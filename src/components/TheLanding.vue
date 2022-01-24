<template>
  <div class="landing">
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
    <router-link to="/game">
      <button>Start the mission</button>
    </router-link>
  </div>
  
</template>

<script>
export default {
  name: 'TheLanding',
  data() {
    return {
      title: "Mars Rover Mission",
      text: `You're part of the team that explores Mars by sending remotely controlled vehicles to the surface 
        of the planet. Develop a software that translates the commands sent from earth to instructions
        that are understood by the rover.`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .landing {
    display: inline-block;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.8);
  } 
  button {
    padding: 1rem;
    cursor: pointer;
  }
  p {
    width: 80%;
    margin: 1rem auto;
  }
</style>
