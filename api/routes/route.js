import { Router } from "express";
import { teheeJokeController } from "../controllers/teheeJokeController.js";
import { issController } from "../controllers/issController.js";
import { freePublicApiController } from "../controllers/freePublicApiController.js";
import { peopleController } from "../controllers/peopleController.js";
import { productController } from "../controllers/productController.js";

const router = Router();

// middleware
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

router.get('/tehee-jokes', teheeJokeController.index);
router.get('/iss', issController.index);
router.get('/public-apis/:id?', freePublicApiController.index);
router.get('/public-apis/limit', freePublicApiController.limit);
router.get('/public-apis/limit-sorts', freePublicApiController.limitAndSort);
router.get('/people', peopleController.index);
router.get('/people/:id', peopleController.findById);
router.get('/products', productController.index);
router.get('/products/:id', productController.findById);

export { router };