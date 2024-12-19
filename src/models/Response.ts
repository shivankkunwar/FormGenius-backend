import mongoose, { Schema } from 'mongoose';

const ResponseSchema = new Schema({
  formId: {
    type: Schema.Types.ObjectId,
    ref: 'Form',
    required: true,
  },
  answers: [{
    questionId: String,
    questionTitle: String, 
    answer: mongoose.Schema.Types.Mixed,
    questionType: String,
  }],
  submittedAt: {
    type: Date,
    default: Date.now,
  }
});

export const Response = mongoose.model('Response', ResponseSchema);