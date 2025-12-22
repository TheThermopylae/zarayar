// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js')

firebase.initializeApp({
  apiKey: 'AIzaSyDNQSH09FkdTAZXGTgrT5D6FrA7USY_PGU',
  projectId: 'zarayar-3ac7c',
  messagingSenderId: '917361833586',
  appId: '1:917361833586:web:64398dd025c362ae54f4eb'
  // بقیه کانفیگ‌هایی که از کنسول فایربیس گرفتی
})

const messaging = firebase.messaging()

// هندل کردن نوتیفیکیشن وقتی سایت باز نیست (Background)
messaging.onBackgroundMessage(payload => {
  console.log('Received background message ', payload)
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // آیکون سایتت
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
