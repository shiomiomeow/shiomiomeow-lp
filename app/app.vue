<template>
  <main 
    class="relative w-full h-screen overflow-hidden flex flex-col md:flex-row font-sans transition-all duration-1000"
    :class="isMeowMode ? 'sepia-[0.2] hue-rotate-[340deg] cursor-none' : 'bg-slate-100'"
    @mousemove="handleMouseMove"
    @click="handleGlobalClick"
  >
    <div v-if="isMeowMode" class="fixed pointer-events-none z-[999] text-3xl transition-all duration-500 ease-out" :style="{ left: mouseX + 'px', top: mouseY + 'px', transform: 'translate(-50%, -50%)' }">🐾</div>

    <div class="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div class="flex flex-col items-center">
        <button @click.stop="handleAvatarClick" class="w-24 h-24 md:w-48 lg:w-64 md:h-48 lg:h-64 bg-white rounded-full shadow-2xl border-4 border-slate-50 flex items-center justify-center overflow-hidden pointer-events-auto transition-all duration-500 hover:scale-105 active:scale-95">
          <img :src="isMeowMode ? '/avatar_cat.png' : '/avatar.webp'" alt="Mio" class="w-full h-full object-cover" />
        </button>
        <div class="mt-6 px-8 py-3 bg-slate-900 text-white rounded-md shadow-lg pointer-events-auto">
          <h1 class="text-lg md:text-2xl font-black tracking-[0.2em] uppercase">{{ isMeowMode ? 'Nyanneko Mio' : 'Shioneko Mio' }}</h1>
        </div>
      </div>
    </div>

    <NuxtLink :to="links.logical" target="_blank" class="relative flex-1 bg-white group border-r border-slate-100 flex flex-col items-center justify-center p-8 transition-all duration-700 hover:flex-[1.2]">
      <div class="absolute inset-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
        <span class="text-[12vw] font-black tracking-tighter text-blue-900 uppercase italic">Streaming</span>
      </div>

      <div class="z-10 text-center max-w-xs transition-transform duration-500 group-hover:-translate-y-4">
        <div class="flex items-center justify-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span class="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Live Session</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-slate-200 group-hover:text-blue-600 transition-all uppercase tracking-tighter mb-4 italic">
          {{ isMeowMode ? 'Meowgical' : 'Logical' }}
        </h2>
        
        <div class="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform translate-y-4 group-hover:translate-y-0">
          <p class="text-blue-600 font-bold text-lg">{{ isMeowMode ? 'おしゃべり担当' : 'VTuber 自己紹介' }}</p>
          <p class="text-slate-500 text-sm leading-relaxed">
            {{ isMeowMode 
              ? '楽しいこと、面白いことを論理（？）というスパイスで味付けして届けるにゃ。' 
              : '情報の海を泳ぎ、エンターテインメントへと昇華させる。配信という「論理」の舞台で、最高の体験を共有します。' 
            }}
          </p>
          <div class="flex flex-wrap justify-center gap-2 mt-4">
            <span class="text-[10px] px-2 py-0.5 border border-blue-100 text-blue-400 rounded uppercase">Entertainment</span>
            <span class="text-[10px] px-2 py-0.5 border border-blue-100 text-blue-400 rounded uppercase">Creative</span>
            <span class="text-[10px] px-2 py-0.5 border border-blue-100 text-blue-400 rounded uppercase">Broadcasting</span>
          </div>
        </div>
      </div>
    </NuxtLink>

    <NuxtLink :to="links.physical" target="_blank" class="relative flex-1 bg-slate-900 group flex flex-col items-center justify-center p-8 transition-all duration-700 hover:flex-[1.2]">
      <div class="absolute inset-0 flex items-center justify-center opacity-[0.05] group-hover:opacity-[0.1] transition-opacity pointer-events-none">
        <span class="text-[10vw] font-mono font-bold text-emerald-500 uppercase tracking-tighter">0x5F3759DF</span>
      </div>

      <div class="z-10 text-center max-w-xs transition-transform duration-500 group-hover:-translate-y-4">
        <div class="flex items-center justify-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span class="text-[10px] font-mono text-emerald-900 tracking-widest uppercase">Root Access</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-mono font-bold text-slate-800 group-hover:text-emerald-400 transition-all uppercase tracking-tighter mb-4">
          {{ isMeowMode ? 'Pawsical' : 'Physical' }}
        </h2>
        
        <div class="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform translate-y-4 group-hover:translate-y-0">
          <p class="text-emerald-400 font-mono text-lg">{{ isMeowMode ? 'システムの守護猫' : '中の人 自己紹介' }}</p>
          <p class="text-slate-400 text-sm leading-relaxed font-sans">
            {{ isMeowMode 
              ? 'カーネルの隙間でお昼寝しながら、悪いパケットを見張ってるにゃ。' 
              : '低レイヤーからセキュリティまで。ビットの深淵でシステムの根幹を護り、最適化する「職人」としての探究心。' 
            }}
          </p>
          <div class="flex flex-wrap justify-center gap-2 mt-4 font-mono">
            <span class="text-[10px] px-2 py-0.5 border border-emerald-900 text-emerald-700 rounded uppercase">Low-Layer</span>
            <span class="text-[10px] px-2 py-0.5 border border-emerald-900 text-emerald-700 rounded uppercase">Security</span>
            <span class="text-[10px] px-2 py-0.5 border border-emerald-900 text-emerald-700 rounded uppercase">Kernel</span>
          </div>
        </div>
      </div>
    </NuxtLink>
  </main>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'

const links = {
  logical: 'https://www.youtube.com/@YourChannel',
  physical: 'https://github.com/YourID'
}

const isMeowMode = ref(false)
const clickCount = ref(0)
const mouseX = ref(0)
const mouseY = ref(0)
let consoleInterval: any = null

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

const handleGlobalClick = () => {
  if (isMeowMode.value) {
    console.log("%c( 🐱 ) < NYAAAAN!!!", "color: #ff69b4; font-weight: bold; font-size: 16px;");
  }
}

const handleAvatarClick = () => {
  clickCount.value++
  if (clickCount.value >= 7) {
    isMeowMode.value = !isMeowMode.value
    clickCount.value = 0
  }
}

onUnmounted(() => clearInterval(consoleInterval))
</script>