export class ApplicationDescription {

  constructor(public application_uri: string, 
              public product_uri: string,
              public application_name: LocalizedText,
              public application_type: ApplicationType,
              public gateway_server_uri: string,
              public discovery_profile_uri: string,
              public discovery_urls: string[]) {}
}
