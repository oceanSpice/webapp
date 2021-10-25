export interface Web3ModalOpts {
    cacheProvider: boolean;
    providerOptions: any;
    theme: any;
    package?: any; 
    options?: any; 
    connector?: Connector | undefined; 
    display?: Partial<IProviderDisplay> | undefined;
}