import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovKseebkrApi implements ICredentialType {
        name = 'N8nDevApisetuGovKseebkrApi';

        displayName = 'Apisetu Gov Kseebkr API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovKseebkr/apisetu-gov-kseebkr.svg', dark: 'file:../nodes/ApisetuGovKseebkr/apisetu-gov-kseebkr.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/kseebkr/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/kseebkr/v3',
                        description: 'The base URL of your Apisetu Gov Kseebkr API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
