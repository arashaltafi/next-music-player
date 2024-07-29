import { schema } from '@/graphql/schema';
import { ApolloServer } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next';

const apolloServer = new ApolloServer({
    schema,
    introspection: true,  // Allows introspection of the schema
    context: ({ req }: { req: NextApiRequest }) => {
        // Extract headers or other information from the request here
        return {
            token: req.headers.token,
            theme: req.headers.theme,
        };
    }
});

const startServer = apolloServer.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await startServer;
    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res);
}

export const config = {
    api: {
        bodyParser: false,
    },
};
