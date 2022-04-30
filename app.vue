<script lang="ts" setup>
  const { isDarkMode } = useDarkMode()
</script>

<template>
  <div :style="isDarkMode ? { backgroundColor: 'black' } : null">
    <Nav />
    <Heading />
    <Cards />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Georgia;
}
</style>
