import { Router } from "express";

const router = Router();

const setRequestTimestamp = (req, res, next) => {
    req.timestamp = new Date().toLocaleString();
    next();
};

// intercept any request for each route.
router.use(setRequestTimestamp);

router.get('/', (req, res, next) => {
    res.status(200);
    res.json({
        data: `You made ${req.method} request to api/v1 at ${req.timestamp}.`
    });
    res.end();
});

export { router };