// npm i graphiql graphql

import React, { useEffect, useState } from 'react'
import { GraphiQL } from 'graphiql';
import 'graphiql/graphiql.css';
import 'graphiql/graphiql.min.css';

const GraphQl = () => {
    const [fetcher, setFetcher] = useState<any>(null);

    useEffect(() => {
        const fetcherFunc = async (graphQLParams: any) => {
            const response = await fetch('/api/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(graphQLParams),
            });
            return response.json().catch(() => response.text());
        };
        setFetcher(() => fetcherFunc);
    }, []);

    return (
        <div style={{ height: '100vh' }}>
            {fetcher && <GraphiQL fetcher={fetcher} />}
        </div>
    )
}


export default GraphQl