export interface IUser {
    _id: string;
    email: string;
    password: string;
    name: string;
    createdAt: Date;
  }
  
  export interface IUserInput {
    email: string;
    password: string;
    name: string;
  }


export interface IUserMethods {
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface UserModel extends IUser, IUserMethods {}