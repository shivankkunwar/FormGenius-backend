export interface IQuestion {
    id: string;
    type: 'text' | 'checkbox' | 'grid';
    title: string;
    required: boolean;
    options?: string[];
    rows?: string[];
    columns?: string[];
  }
  
  export interface IForm {
    title: string;
    description?: string;
    headerImage?: string;
    questions: IQuestion[];
    createdBy: string;
    createdAt: Date;
  }
  
  export interface IResponse {
    formId: string;
    answers: {
      questionId: string;
      answer: any;
    }[];
    submittedAt: Date;
  }