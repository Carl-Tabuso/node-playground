import { readFile, writeFile } from 'fs';

const readFileContents = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
        err ? reject(err) : resolve(data);
        });
    });
}

export { readFileContents };