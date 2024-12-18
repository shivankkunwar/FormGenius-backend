import express, { RequestHandler } from 'express';
import { createForm, getForms, getFormById, updateForm, deleteForm } from '../controllers/formController';
import { auth } from '../middleware/auth';

const router = express.Router();

router.use(auth);

router.post('/', createForm as RequestHandler);
router.get('/', getForms as RequestHandler);
router.get('/:id', getFormById as RequestHandler);
router.put('/:id', updateForm as RequestHandler);
router.delete('/:id', deleteForm as RequestHandler);

export default router;