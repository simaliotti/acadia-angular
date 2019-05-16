export class JwtAuthenticationResponse {

  accessToken: string;
  tokenType: string;

  constructor(accessToken?: string, tokenType?: string){
    this.accessToken = accessToken;
    this.tokenType = tokenType;
  }
}
