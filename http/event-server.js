import { createServer } from "node:http";

const port = 4000;
const eventServer = createServer();

eventServer.on('request', (req, res) => {
    res.end('Using event emitter');
});

eventServer.listen(port, () => console.log(`Listening to port ${port}`));

export { eventServer };