// stream contents of a large file
import { createReadStream } from "node:fs";

const path = './filesystems/subdir/large-contents.txt';

// default 64kb buffer size
const startReadStream = () => {
    const stream = createReadStream(path, { 
        highWaterMark: 9000, 
        // encoding: 'utf-8' 
    });

    stream.on('error', (err) => console.error('Error: ', err));
    stream.on('data', (string) => console.log(string));
    stream.on('end', () => console.log('Finished streaming'));
}

export { startReadStream };