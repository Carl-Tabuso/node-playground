import os from 'os';

const serverOS = {
    type: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    // platform: os.platform(),
    // userInfo: os.userInfo(),
    // uptime: os.uptime(),
};

const objs = Object.entries(serverOS);

console.log(objs);

for (const key in serverOS) {
    if (Object.prototype.hasOwnProperty.call(serverOS, key)) {
        const element = serverOS[key];
        console.log(`${key}: ${element}`);
    }
}