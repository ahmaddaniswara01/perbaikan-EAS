<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <div>
    <header>
      <h1>Selamat Datang di Lomba Super Keren</h1>
      <p>Temukan bakat dan keahlianmu, dan menangkan hadiah fantastis!</p>
    </header>
    <footer>
      <p>&copy; 2023 Lomba Super Keren. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  background-color: #2ecc71;
  color: #fff;
  padding: 20px;
  text-align: center;
}

main {
  padding: 20px;
}

section {
  margin-bottom: 20px;
}

h2 {
  color: #2ecc71;
}
</style>
