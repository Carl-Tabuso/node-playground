import { existsSync, writeFileSync } from "node:fs";

const path = './filesystems/subdir/large-contents.txt';
const base = 0;
const max = 100000;

const writeThousandHelloWorld = () => {
    if (existsSync(path)) {
        console.log('File already available.');
        return;
    }
    for (let i = base; i < max; i++) {
        writeFileSync(path, `${i + 1}: Hello World\n`, { flag: 'a' });
    }
    console.log('File created.');
}

export { writeThousandHelloWorld };