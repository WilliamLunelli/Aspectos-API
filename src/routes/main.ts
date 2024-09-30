import { Router } from 'express';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post("/produtos", (req, res) => {
    //receber dados
    //processar dados

    
} )