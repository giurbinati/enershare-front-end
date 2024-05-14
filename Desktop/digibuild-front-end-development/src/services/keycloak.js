let accessToken = null;

class Keycloak {
    constructor() {
        this.clientId = process.env.REACT_APP_CLIENT_ID;
        this.clientSecret = process.env.REACT_APP_CLIENT_SECRET;
        this.tokenUrl = process.env.REACT_APP_API_TOKEN_URL; 
        this.username = process.env.REACT_APP_USERNAMEKEYCLOACK;
        this.password = process.env.REACT_APP_PASSWORD;
    }

    async login() {
        try {
            console.log(this.tokenUrl)
            console.log(this.clientSecret)
            const response = await fetch(this.tokenUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `grant_type=password&client_id=${this.clientId}&client_secret=${this.clientSecret}&clear&username=${this.username}&password=${this.password}`,
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                console.log('Error response from Keycloak:', errorResponse);
                return { error: 'Failed to obtain access token' };
            }
            const tokenInfo = await response.json();

            const token = tokenInfo.access_token;
            console.log('token', token)
            accessToken = token;
            return { data: token, message: 'Logged in successfully' };
        } catch (error) {
            console.error('Error in login:', error);
            return { error: 'Internal Server Error' };
        }
    }

    async getAccessToken() {
        console.log('gettoken', accessToken)
        return accessToken;
    }
}

export default new Keycloak();
