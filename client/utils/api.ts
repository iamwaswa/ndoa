import { MethodEnum } from 'enums';
import { NextApiRequest } from 'next';

export class API {
  constructor(private req: NextApiRequest) {}

  isPostRequest(): boolean {
    return this.req.method.toUpperCase() === MethodEnum.POST;
  }
}
