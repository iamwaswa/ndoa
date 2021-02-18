import { MethodEnum } from 'enums';
import { NextApiRequest } from 'next';

export class API {
  constructor(private req: NextApiRequest) {}

  isGetRequest(): boolean {
    return this.req.method.toUpperCase() === MethodEnum.GET;
  }

  isPostRequest(): boolean {
    return this.req.method.toUpperCase() === MethodEnum.POST;
  }
}
