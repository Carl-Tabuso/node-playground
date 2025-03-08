import axios from "axios";

export const index = async (req, res, next) => {
    try {
        const apiResponse = await axios.get('http://api.open-notify.org/iss-now.json');
        // console.log(new Date(apiResponse.data.timestamp * 1000).toLocaleString());
        res.status(200).send(apiResponse.data).end();
    } catch (err) {
        console.error(err);
        res.status(418).end();
    }
}

export * as issController from './issController.js';