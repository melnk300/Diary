<template>
  <div id="app">
    <div id="nav">
      <p>
        <router-link to="/">Home</router-link>
      </p>
      <p>
        <router-link to="/about">About</router-link>
      </p>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  display: grid;
  grid-template-columns: 6% auto;
  height: 100vh;
}

* {
  font-family: Roboto, sans-serif;
  margin: 0;
  padding: 0;
}

a, a:hover, a:visited {
  color: black;
  text-decoration: none;
}

#nav {
  text-align: center;
  background-color: #fbfbfb;
}
</style>
