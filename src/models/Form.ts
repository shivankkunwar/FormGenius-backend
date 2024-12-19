import mongoose, { Schema } from 'mongoose';

const QuestionSchema = new Schema({
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
  imageUrl: String,
});

const FormSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  headerImage: String,
  questions: [QuestionSchema],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  shareableLink: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


FormSchema.pre('save', function(next) {
  if (!this.shareableLink) {
    this.shareableLink = `form_${this._id}_${Date.now()}`;
  }
  next();
});

export const Form = mongoose.model('Form', FormSchema);