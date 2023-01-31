import { Client } from 'whatsapp-web.js';
import QRCode from 'qrcode-terminal';

const client = new Client({});

client.on('qr', qr => {
  QRCode.generate(qr, { small: true });
})

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
});
 
client.initialize();