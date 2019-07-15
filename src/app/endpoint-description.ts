export class EndpointDescription {

  constructor(public endpointUrl: string,
              public server: ApplicationDescription,
              public server_certificate: ByteString,
              public security_mode: MessageSecurityMode,
              public security_policy_uri: string,
              public user_identity_tokens: UserTokenPolicy[],
              public transport_profile_uri: string,
              public security_level: string){}
}
