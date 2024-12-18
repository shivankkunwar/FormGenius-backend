import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { Response as FormResponse } from '../models/Response';

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
    const responses = await FormResponse.find({ formId: req.params.formId });
    res.json(responses);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching responses' });
  }
};