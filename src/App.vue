<template>
  <transition name="fade">
    <router-view/>
  </transition>
</template>

<style>

* {
  font-family: Orbitron, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #2c3e50;
  color: white;
  background: url('~@/assets/background.jpg');
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

</style>
