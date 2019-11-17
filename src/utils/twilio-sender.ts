import Twil from 'twilio'

const TwilioClient = Twil(process.env.TWILIO_ACC_SID, process.env.TWILIO_AUTH_TOKEN)
const TwilioService = TwilioClient.notify.services(process.env.TWILIO_NOTIFY_SID!)

export class TwilioSender {
  public static async sendMassMessage(message: string, numbers: string[]) {
    const toBinding = numbers.map(n => JSON.stringify({ binding_type: 'sms', address: n }))
    return await TwilioService.notifications.create({ toBinding, body: message })
  }

  public static async sendPrivateMessage(message: string, number: string) {
    const toBinding = [JSON.stringify({ binding_type: 'sms', address: number })]
    return await TwilioService.notifications.create({ toBinding, body: message })
  }
}