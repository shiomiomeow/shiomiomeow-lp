<template>
  <main class="relative w-full h-screen overflow-hidden flex flex-col md:flex-row font-sans bg-slate-100">

    <div class="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
      <div class="flex flex-col items-center">

        <div
          class="w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-white rounded-full shadow-2xl border-4 border-slate-50 flex items-center justify-center overflow-hidden pointer-events-auto transition-all duration-500 hover:scale-105">
          <img src="/avatar.webp" alt="汐猫みお" class="w-full h-full object-cover" />
        </div>

        <div class="mt-6 px-8 py-3 bg-slate-900 text-white rounded-md shadow-lg pointer-events-auto">
          <h1 class="text-lg md:text-2xl font-black tracking-[0.2em] uppercase">Shioneko Mio</h1>
        </div>

      </div>
    </div>

    <NuxtLink :to="links.logical" target="_blank"
      class="relative flex-1 hover:flex-[1.1] flex flex-col items-center justify-center transition-all duration-700 ease-in-out bg-white group cursor-pointer border-r border-slate-100">
      <div class="z-10 text-center transition-transform duration-500 group-hover:-translate-x-4">
        <h2
          class="text-4xl md:text-6xl font-light text-slate-300 group-hover:text-blue-600 group-hover:font-bold transition-all duration-300 uppercase tracking-widest">
          Logical
        </h2>
        <p class="mt-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm">
          Watch on YouTube
        </p>
      </div>
      <span
        class="absolute left-10 bottom-10 text-8xl font-black text-slate-300 group-hover:text-blue-50 transition-colors pointer-events-none">LOG</span>
    </NuxtLink>

    <NuxtLink :to="links.physical" target="_blank"
      class="relative flex-1 hover:flex-[1.1] flex flex-col items-center justify-center transition-all duration-700 ease-in-out bg-slate-900 group cursor-pointer">
      <div class="z-10 text-center transition-transform duration-500 group-hover:translate-x-4">
        <h2
          class="text-4xl md:text-6xl font-light text-slate-600 group-hover:text-emerald-400 group-hover:font-bold transition-all duration-300 uppercase tracking-widest">
          Physical
        </h2>
        <p class="mt-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm">
          View on GitHub
        </p>
      </div>
      <span
        class="absolute right-10 top-10 text-8xl font-black text-slate-700 group-hover:text-slate-700 transition-colors pointer-events-none">PHY</span>
    </NuxtLink>

  </main>
</template>

<script setup lang="ts">
const links = {
  logical: 'https://www.youtube.com/@YourChannel',
  physical: 'https://github.com/YourID'
}
</script>

<style scoped>
/* 左右の伸縮率を微調整 */
.flex-1 {
  flex: 1 1 0%;
}

.hover\:flex-\[1\.1\]:hover {
  flex: 1.1 1 0%;
}

main {
  -webkit-font-smoothing: antialiased;
}
</style>