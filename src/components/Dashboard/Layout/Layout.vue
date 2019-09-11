<template>
  <div class="app-layout">
    <Sidebar />
    <Content />
  </div>
</template>
<script>
import Sidebar from './Sidebar';
import Content from './Content';
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Content
  }
}
</script>