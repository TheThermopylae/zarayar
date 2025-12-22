export default function () {
  let settings = useState('settings', () => {
    return {
      success: true,
      data: {
        headerSettings: {
          mode: 'text',
          title: '',
          logoUrl: ''
        },
        introPage: {
          isActive: true,
          title: '',
          description: '',
          imageUrl: ''
        },
        transactionOptions: {
          sendSms: true,
          accountingMelted: true,
          accountingCoin: false,
          accountingSilver: false,
          showDescription: true,
          accountingType: true
        },
        currency: {
          unit: 'rial'
        },
        notificationSounds: {
          onReceiveTrade: {
            active: true,
            soundFile: ''
          },
          onConfirmTrade: {
            active: true,
            soundFile: ''
          },
          onCancelTrade: {
            active: true,
            soundFile: ''
          },
          onPriceChange: {
            active: false,
            soundFile: ''
          },
          onReceiveNotif: {
            active: true,
            soundFile: ''
          }
        },
        priceSteps: {
          melted: 20,
          coin: 50,
          silverShot: 10,
          silverBar: 10
        },
        tradeLimits: {
          melted: {
            minWeight: 10,
            maxWeight: 5000
          },
          coin: {
            minCount: 1,
            maxCount: 100
          },
          silver: {
            minWeight: 50,
            maxWeight: 2000,
            minCount: 0,
            maxCount: 0
          }
        },
        subsetSettings: {
          showInactiveItems: true,
          connectionStatus: true,
          confirmOrReject: false,
          independentTrade: true,
          shopName: '',
          domain: '',
          accountCode: '',
          mainAccountCode: ''
        },
        customerPanel: {
          adminMobile: {
            isActive: true,
            numbers: ['', '']
          },
          confirmTimeout: 60,
          displayType: 'list'
        },
        generalSettings: {
          messageText: '',
          messageDuration: 5,
          termsText: '',
          loginText: '',
          aboutUs: ''
        }
      }
    }
  })

  return { settings }
}
