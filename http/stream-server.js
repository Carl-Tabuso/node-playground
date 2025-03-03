import { createReadStream } from 'node:fs';
import http from 'node:http';

const startStreamServer = () => {
    const port = 3000;
    http.createServer((req, res) => {
        const fileStream = createReadStream(
            './filesystems/subdir/large-contents.txt', 
            'utf-8'
        );
        fileStream.on('open', () => {
            fileStream.pipe(res)
        });
        fileStream.on('error', (err) => res.end(`Error: ${err}`));
        // fileStream.on('data', (text) => res.end(text));
    }).listen(port, () => {
        console.log(`Listening to port ${port}`);
    });    
}

export { startStreamServer };