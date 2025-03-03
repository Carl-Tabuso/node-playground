import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync, writeFileSync } from 'fs';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileSystems = {
    path: path.join('/filesystems', 'subdir', 'dummy.txt'),
    baseName: path.basename('/filesystems', 'subdir', 'dummy.txt'),
    separator: path.sep,
};

console.log('start blocking process');

const dummyFilePath = readFileSync('./filesystems/subdir/dummy.txt', 'utf-8');
const dummy2FilePath =  readFileSync('./filesystems/subdir/dummy2.txt', 'utf-8');

// override the content of text
writeFileSync('./filesystems/subdir/dummy.txt', `File systems info: path=${fileSystems.path}`);

// add flag to append only
writeFileSync('./filesystems/subdir/dummy2.txt', ` appending this from ${__filename}`, { flag: 'a' })

const user = os.userInfo();

writeFileSync(
    './filesystems/subdir/user-info.txt',
    `Server user information \n 
    uid: ${user.uid} \n 
    gid: ${user.gid} \n 
    username: ${user.username} \n 
    homedir: ${user.homedir} \n 
    shell ${user.shell}`
);

console.log(dummyFilePath, dummy2FilePath);

console.log('end blocking process');