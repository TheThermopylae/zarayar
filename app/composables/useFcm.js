// composables/useFcm.js
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

export const useFcm = () => {
  const config = {
    apiKey: 'AIzaSyDNQSH09FkdTAZXGTgrT5D6FrA7USY_PGU',
    authDomain: 'zarayar-3ac7c.firebaseapp.com',
    projectId: 'zarayar-3ac7c',
    storageBucket: 'zarayar-3ac7c.firebasestorage.app',
    messagingSenderId: '917361833586',
    appId: '1:917361833586:web:64398dd025c362ae54f4eb',
    measurementId: 'G-C5Z7HN66QB'
    // اینا رو از کنسول فایربیس کپی کن
  }

  async function getDeviceToken () {
    try {
      // ۱. اینیشیال کردن فایربیس
      const app = initializeApp(config)
      const messaging = getMessaging(app)

      // ۲. گرفتن اجازه از کاربر (مرورگر پاپ‌آپ میده)
      const permission = await Notification.requestPermission()

      if (permission === 'granted') {
        // ۳. گرفتن توکن
        const token = await getToken(messaging, {
          // اون کد Vapid Key که تو مرحله ۱ گفتم جنریت کن رو اینجا بذار
          vapidKey: 'BHYyBGa1K7TIOlhXKC4jJxAMu7q-qwPGhlhOYy1KHh4nKY3CDAWaEGQWlm4B0taIms57as7G-yMpUp6C5EEzPjc'
        })

        if (token) {
          console.log('Device Token:', token)
          return token
        } else {
          console.log('No registration token available.')
        }
      } else {
        console.log('اجازه ارسال نوتیفیکیشن داده نشد.')
      }
    } catch (error) {
      console.error('An error occurred while retrieving token. ', error)
    }
    return null
  }

  // گوش دادن به پیام وقتی سایت بازه
  function listenForMessages () {
    const app = initializeApp(config)
    const messaging = getMessaging(app)
    onMessage(messaging, payload => {
      console.log('Message received. ', payload)
      // اینجا می‌تونی با Toast پیام رو نشون بدی
      // showToast(payload.notification.title, payload.notification.body)
    })
  }

  return { getDeviceToken, listenForMessages }
}
