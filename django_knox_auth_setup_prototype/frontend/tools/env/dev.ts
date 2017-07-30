import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
    ENV: 'DEV',
    APIURL: 'http://127.0.0.1:8000/',
    REDIRECTURL: 'http://127.0.0.1:5555'
};

export = DevConfig;
