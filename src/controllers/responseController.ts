import { Response , Request} from 'express';
import { AuthRequest } from '../middleware/auth';
import { Response as FormResponse } from '../models/Response';
import { Form } from '../models/Form';

export const submitResponse = async (req: AuthRequest, res: Response) => {
  try {
    const response = new FormResponse({
      ...req.body,
      submittedBy: req.userId,
    });
    await response.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: 'Error submitting response' });
  }
};

export const getFormResponses = async (req: AuthRequest, res: Response) => {
  try {
    const responses = await FormResponse.find({ formId: req.params.formId }).sort('-submittedAt');;
    res.json(responses);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching responses' });
  }
};
export const getFormByShareableLink = async (req: Request, res: Response): Promise<Response> => {
  try {
    const form = await Form.findOne({ shareableLink: req.params.link });
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    return res.json(form);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching form' });
  }
};