import { createServer } from 'node:http';

const hostname = '127.0.0.1'
const port = 4000

const server = createServer((req, res) => {
    res.on('smth-happened', () => {
        console.log('Something just happened.')
    })
    
    setTimeout(() => {
        res.emit('smth-happened')
    }, 1000)
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})