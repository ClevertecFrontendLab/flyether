
export type Detail = {
  description: string;
};
export interface IError {
  data: {
    message: string;
    stack: string;
  };
  status: number;
}
export type RegData = {
  email: string;
  password: string;
  name?: string;
};

