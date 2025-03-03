import startServer from "./http/server.js";
import setTimeoutEvent from "./event-loop/set-timeout.js";
import execForLoop from "./is-odd-even.js";
import { readFileContents } from "./event-loop/promises.js";
import { runAsyncAwaitFunc } from "./event-loop/async-await.js";
import { runAsyncAwaitFunc as asyncAwaitUsingUtil } from "./event-loop/async-await-using-util.js";
import { setEventName, emitEvent } from './events/emitter.js';
import { EventEmitter } from "node:events";
// import { eventServer } from "./http/event-server.js";
import { writeThousandHelloWorld } from "./filesystems/write.js";
import { startReadStream } from "./filesystems/stream.js";
import { startStreamServer } from "./http/stream-server.js";

startServer();

// setTimeoutEvent();

// execForLoop();

// readFileContents('./filesystems/subdir/user-info.txt')
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));

// asyncAwaitUsingUtil().then((res) => console.log(res));

// runAsyncAwaitFunc().then((res) => console.log(res));

// setEventName('some-event');
// emitEvent();

// eventServer();

// writeThousandHelloWorld();

// startReadStream();

// startStreamServer();