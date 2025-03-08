import axios from "axios";

// route parameters
export const index = async (req, res, next) => {
    const param = req.params.id;
    try {
        console.log(param);
        const apiResponse = await axios.get(`https://www.freepublicapis.com/api/${param ? ('apis/'+param) : 'random'}`);
        return res.status(200).send(apiResponse.data).end();
    } catch (err) {
        console.error(err);
        return res.status(418).end();
    }
}

// query strings
export const limit = async (req, res, next) => {
    const qryString = { limit: req.query.limit };
    try {
        const apiResponse = await axios.get('https://www.freepublicapis.com/api/apis', { params: qryString });
        return res.status(200).send(apiResponse.data).end();
    } catch (err) {
        console.error(err);
        return res.status(418).end();
    }
}

// query strings
export const limitAndSort = async (req, res, next) => {
    const qryStrings = { 
        limit: req.query.limit, 
        sort: req.query.sort
    }
    try {
        const apiResponse = await axios.get('https://www.freepublicapis.com/api/apis', { params: qryStrings });
        return res.status(200).send(apiResponse.data).end();
    } catch (err) {
        console.error(err);
        return res.status(418).end();
    }
}

export * as freePublicApiController from './freePublicApiController.js';