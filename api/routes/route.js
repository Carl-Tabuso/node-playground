import { Router } from "express";

const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).json('hello');
    res.end();
});

export { router };