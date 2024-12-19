import {Router} from 'express';
import { submitResponse, getFormResponses, getFormByShareableLink } from '../controllers/responseController';
import { auth } from '../middleware/auth';

const router = Router();

router.post('/', auth, submitResponse);
router.get('/form/:formId', auth, getFormResponses);
router.get('/:formId/responses', auth, getFormResponses);

export default router;