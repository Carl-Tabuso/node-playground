import express from 'express';
import 'dotenv/config';
import { router } from './routes/route.js';

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use('/api/v1', router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, host, (err) => {
    console.log(`Server started at http://${host +':'+ port}`);
});