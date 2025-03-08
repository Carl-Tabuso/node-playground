import { people } from '../resource-collection/people.js';

export const index = (req, res, next) => {
    return res.status(200).send(people).end();
}

export const findById = (req, res, next) => {
    const personId = req.params.id;
    const person = people.find((p) => p.id == personId);
    
    if (! person) {
        return res.status(404).send({message: `Person with id ${personId} was not found.`}).end();
    }
    
    return res.status(200).send(person).end();
}

export * as peopleController from './peopleController.js';