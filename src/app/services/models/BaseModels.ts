export interface AccessTokenInterface {
  id?: any;
  ttl?: number;
  issuedAt?: any;
  created: any;
  userId?: number;
  rememberMe?: boolean;
}

export class SDKToken implements AccessTokenInterface {
  id: any = null;
  ttl: number = null;
  issuedAt: any = null;
  created: any = null;
  userId: any = null;
  user: any = null;
  rememberMe: boolean = null;
  constructor(data?: AccessTokenInterface) {
    Object.assign(this, data);
  }
}

export class AccessToken implements AccessTokenInterface {
  id: any = "";
  ttl: number = 1209600;
  created: Date = new Date(0);
  userId: number = 0;
  user: any = null;
  constructor(data?: AccessTokenInterface) {
    Object.assign(this, data);
  }
}
