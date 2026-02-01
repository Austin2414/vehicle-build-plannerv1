import { Router } from 'express';
import parts from '../data/data.js';
import validateBuild from '../rules/rules.js';

const router = Router();

router.get("/", (req, res) => {

    res.send("Your vehicle build planner is up!")
});

router.post('/validateBuild', (req, res) => {
    const intakeId = req.body.intakeId
    const exhaustId = req.body.exhaustId
    const turboId = req.body.turboId
    const injectorsId = req.body.injectorsId
    const fuelPumpId = req.body.fuelPumpId

    if (!intakeId) {
        return res.status(400).send('Invalid intake input.')
    }
    if (!exhaustId) {
        return res.status(400).send('Invalid exhaust input.')
    }
    if (!turboId) {
        return res.status(400).send('Invalid turbo input.')
    }
    if (!injectorsId) {
        return res.status(400).send('Invalid injectors input.')
    }
    if (!fuelPumpId) {
        return res.status(400).send('Invalid fuel pump input.')
    }

    const intakePart = parts.intake.find(
        (item) => item.id === intakeId
    );
    const exhaustPart = parts.exhaust.find(
        (item) => item.id === exhaustId
    )
    const turboPart = parts.turbo.find(
        (item) => item.id === turboId
    )
    const injectorsPart = parts.injectors.find(
        (item) => item.id === injectorsId
    )
    const fuelPumpPart = parts.fuelPump.find(
        (item) => item.id === fuelPumpId
    )

    if (!intakePart) {
        return res.status(400).send('Invalid intake ID.')
    }
    if (!exhaustPart) {
        return res.status(400).send('Invalid exhaust ID.')
    }
    if (!turboPart) {
        return res.status(400).send('Invalid turbo ID.')
    }
    if (!injectorsPart) {
        return res.status(400).send('Invalid injectors ID.')
    }
    if (!fuelPumpPart) {
        return res.status(400).send('Invalid fuel pump ID.')
    }

    const intake = { size: intakePart.size }
    const exhaust = { size: exhaustPart.size }
    const turbo = { flow: turboPart.flow }
    const injectors = { cc: injectorsPart.cc }
    const fuelPump = { lph: fuelPumpPart.lph }

    const result = validateBuild(intake, exhaust, turbo, injectors, fuelPump)
    
    res.json(result)
}); 

export default router