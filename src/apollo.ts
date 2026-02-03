import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://life-ops.hasura.app/v1/graphql",
        headers: {
            'x-hasura-admin-secret': 'qTe2xAA51ESyzf92vsDWrSxgIF6wCR0M7Tw1LQQKwVeOKPsYUhfzrvvif5wKXG7C',
        }
    }),
    cache: new InMemoryCache(),
});

export default client;
