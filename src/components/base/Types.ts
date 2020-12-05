export interface IError {
  title?: any,
};

export interface IErrorData {
  data: IError;
}

export interface IErrorResponse {
  response: IErrorData;
}