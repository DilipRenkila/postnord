export interface Config {
    bitbucket: {

        /**
         * Username for Bitbucket Cloud.
         * @visibility frontend
         */
        username?: string;
        /**
         * Password for Bitbucket Cloud.
         * @visibility frontend
         */
        appPassword?: string;
    }
}