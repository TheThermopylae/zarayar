import { io } from 'socket.io-client'

export default defineNuxtPlugin(() => {
  let config = useRuntimeConfig()

  const socket = io(config.public.API_BASE_URL, {
    transports: ['websocket']
  })

  return {
    provide: {
      socket
    }
  }
})
