import { readFile, writeFile } from 'node:fs/promises';

export const runAsyncAwaitFunc = async() => {
    try {
        const res1 = await readFile('./filesystems/subdir/user-info.txt', 'utf-8');
        const res2 = await readFile('./filesystems/subdir/dummy.txt', 'utf-8');
        await writeFile('./filesystems/subdir/stupid3.txt', 'From async-await function.');

        return `\nResolved promised \n\n${res1}\n${res2}`;
    } catch (error) {
        return `\nException thrown \n\n${error}`;
    }
}