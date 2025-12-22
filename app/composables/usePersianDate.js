export default function () {
  const toPersianDate = (dateString, withTime) => {
    if (!dateString) return '---'

    const date = new Date(dateString)

    // تنظیمات جدید (فقط تاریخ)
    let options

    if (withTime) {
      options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }
    } else {
      options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }
    }

    return new Intl.DateTimeFormat('fa-IR', options).format(date)
  }

  return { toPersianDate }
}
