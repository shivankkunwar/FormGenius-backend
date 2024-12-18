import mongoose, { Schema } from 'mongoose';
import { IForm } from '../types/form';

const questionSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['text', 'checkbox', 'grid'],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  options: [String],
  rows: [String],
  columns: [String],
});

const formSchema = new Schema<IForm>({
  title: {
    type: String,
    required: true,
  },
  description: String,
  headerImage: String,
  questions: [questionSchema],
  createdBy: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Form = mongoose.model<IForm>('Form', formSchema);