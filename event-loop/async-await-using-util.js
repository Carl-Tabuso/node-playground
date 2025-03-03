import { readFile, writeFile } from 'node:fs';
import util from 'node:util';

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

export const runAsyncAwaitFunc = async() => {
    try {
        const res1 = await readFilePromise('./filesystems/subdir/user-info.txt', 'utf-8');
        const res2 = await readFilePromise('./filesystems/subdir/dummy.txt', 'utf-8');
        await writeFilePromise('./filesystems/subdir/stupid3.txt', 'From async-await function.');

        return `\nResolved promised \n\n${res1}\n${res2}`;
    } catch (error) {
        return `\nException thrown \n\n${error}`;
    }
}