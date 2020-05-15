export function parseMessage (message: string, values: Object): string {
  for (const key of Object.keys(values)) {
    const regex = new RegExp(`\{${key}\}`, 'g')
    message = message.replace(regex, values[key])
  }
  return message
}
