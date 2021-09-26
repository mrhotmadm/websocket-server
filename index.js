const port = process.env.PORT || 80;

const WS = require('ws');
const wss = new WS.Server({ port });

wss.on('connection', (ws) => {
  console.log('Client Connected');
  
  ws.on('message', (data) => {
    console.log(`New Message: ${data}`);

    ws.send('Message Received', (err) => {
      if (err) throw err;
    });
  });
});