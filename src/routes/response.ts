import express from 'express';
import { submitResponse, getFormResponses } from '../controllers/responseController';
import { auth } from '../middleware/auth';

const router = express.Router();

router.post('/', auth, submitResponse);
router.get('/form/:formId', auth, getFormResponses);

export default router;