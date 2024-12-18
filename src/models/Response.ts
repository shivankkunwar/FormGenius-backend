import mongoose, { Schema } from 'mongoose';
import { IFormResponse } from '../types/response';

const responseSchema = new Schema<IFormResponse>({
  formId: {
    type: Schema.Types.ObjectId,
    ref: 'Form',
    required: true,
  },
  answers: [{
    questionId: String,
    answer: Schema.Types.Mixed,
  }],
  submittedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Response = mongoose.model<IFormResponse>('Response', responseSchema);