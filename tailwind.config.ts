// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // 汐猫みお専用カラーを定義
        'shio-logical': '#0077be',  // 深海ブルー（論理）
        'shio-physical': '#333333', // グラファイト（物理）
      },
    },
  },
  plugins: [],
} satisfies Config