const ws = require('ws');
const wss = new ws.Server({ port: 5120 });

wss.on('connection', (ws) => {
  console.log('Client Connected');
 
  ws.on('message', (data) => {
    console.log(`New Message: ${data}`);

    ws.send('Message Received', (err) => {
      if (err) throw err;
    });
  });
});