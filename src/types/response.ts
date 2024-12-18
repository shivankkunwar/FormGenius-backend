import { Schema } from "mongoose";

export interface IAnswer {
    questionId: string;
    answer: any;
  }
  
  export interface IFormResponse {
    formId: {
        type: Schema.Types.ObjectId,
        ref: 'Form',
        required: true,
      };
    answers: IAnswer[];
    submittedBy?: string;
    submittedAt: Date;
  }