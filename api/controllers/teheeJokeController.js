import axios from "axios";

export const index = async (req, res, next) => {
    try {
        const apiRes = await axios.get('https://teehee.dev/api/joke');
        console.log(apiRes.data);
        res.status(200).send(apiRes.data).end();
    } catch (err) {
        console.error(err);
        res.status(418).end();
    }
}

export * as teheeJokeController from './teheeJokeController.js';