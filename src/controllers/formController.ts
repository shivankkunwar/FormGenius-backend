import { Response } from 'express';
import { Form } from '../models/Form';
import { AuthRequest } from '../middleware/auth';

export const createForm = async (req: AuthRequest, res: Response) => {
  try {
    const form = new Form({
      ...req.body,
      createdBy: req.userId,
    });
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    res.status(400).json({ error: 'Error creating form' });
  }
};

export const getForms = async (req: AuthRequest, res: Response) => {
  try {
    const forms = await Form.find({ createdBy: req.userId });
    res.json(forms);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching forms' });
  }
};

export const getFormById = async (req: AuthRequest, res: Response) => {
  try {
    const form = await Form.findOne({
      _id: req.params.id,
      createdBy: req.userId,
    });
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    res.json(form);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching form' });
  }
};

export const updateForm = async (req: AuthRequest, res: Response) => {
  try {
    const form = await Form.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.userId },
      req.body,
      { new: true }
    );
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    res.json(form);
  } catch (error) {
    res.status(400).json({ error: 'Error updating form' });
  }
};

export const deleteForm = async (req: AuthRequest, res: Response) => {
  try {
    const form = await Form.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.userId,
    });
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    res.json({ message: 'Form deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error deleting form' });
  }
};