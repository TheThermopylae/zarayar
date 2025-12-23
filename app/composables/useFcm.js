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
  }

  async function getDeviceToken () {
    // ✅ چک کردن اینکه حتما سمت کلاینت باشیم
    if (process.server) return null // یا if (!process.client)

    try {
      const app = initializeApp(config)
      const messaging = getMessaging(app)

      const permission = await Notification.requestPermission()

      if (permission === 'granted') {
        const token = await getToken(messaging, {
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

  function listenForMessages () {
    // ✅ چک کردن اینکه حتما سمت کلاینت باشیم
    if (process.server) return

    try {
      const app = initializeApp(config)
      const messaging = getMessaging(app)
      
      onMessage(messaging, payload => {
        console.log('Message received. ', payload)
        // اینجا می‌تونی با Toast پیام رو نشون بدی
      })
    } catch (err) {
      console.log('FCM Listen Error:', err)
    }
  }

  return { getDeviceToken, listenForMessages }
}