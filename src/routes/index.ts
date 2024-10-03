import express from 'express';
import { createContactController, deleteContactController, getContactsController } from '../Controllers/contactController';
import { privateRequest } from '../Middlewares/auth';

const router = express.Router();

router.post('/contato',privateRequest, createContactController);

router.get('/contatos', getContactsController);

router.delete('/contato', privateRequest, deleteContactController);

export default router;