<template>
  <div class="w-full h-[300px]">
    <ClientOnly>
      <Bar :data="chartData" :options="chartOptions" />
    </ClientOnly>
  </div>
</template>

<script setup>
// 1. ایمپورت کردن اجزای مورد نیاز
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

// 2. رجیستر کردن ماژول‌های Chart.js (این خط اجباریه)
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// 3. تنظیم داده‌ها (اینجا دو تا میله رو تعریف میکنیم)
const chartData = ref({
  labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'],
  datasets: [
    {
      label: 'واریز', // اسم میله اول
      backgroundColor: '#10B981', // رنگ سبز (Tailwind emerald-500)
      data: [40, 20, 12, 39, 10, 40, 39], // مقادیر میله اول
      borderRadius: 4, // گردی گوشه
    },
    {
      label: 'برداشت', // اسم میله دوم
      backgroundColor: '#EF4444', // رنگ قرمز (Tailwind red-500)
      data: [25, 10, 28, 15, 20, 30, 25], // مقادیر میله دوم
      borderRadius: 4,
    }
  ]
})

// 4. تنظیمات ظاهری (آپشنال)
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false, // باعث میشه نمودار توی دیو والد فیت بشه
  plugins: {
    legend: {
      position: 'top', // جایگاه راهنما
      labels: {
        font: { family: 'inherit' } // فونت فارسی پروژه رو میگیره
      }
    }
  },
  scales: {
    x: {
      grid: { display: false } // حذف خطوط عمودی پشت نمودار برای تمیزی
    },
    y: {
      grid: { color: '#f3f4f6' }, // رنگ خطوط افقی کمرنگ
      beginAtZero: true
    }
  }
})
</script>