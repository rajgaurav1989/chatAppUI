import express from 'express';
import graphQLHTTP from 'express-graphql';
import { execute, subscribe } from 'graphql';
import path from 'path';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const WS_GQL_PATH = '/subscriptions';
const APP_PORT = 3000;
const GRAPHQL_PORT = 8088;

const graphQLApp = express();
graphQLApp.use('/', graphQLHTTP({  pretty: true, graphiql: true }));


const graphQLServer = graphQLApp.listen(GRAPHQL_PORT, () => {
    console.log(
        `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
    );
});


new SubscriptionServer(
    {
        
        execute,
        subscribe
    },
    {
        server: graphQLServer,
        path: WS_GQL_PATH
    }
);


const compiler = webpack({
    mode: 'development',
    entry: [
        'whatwg-fetch',
        path.resolve(__dirname, 'js', 'app.js')
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /\/node_modules\//,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    output: {
        filename: 'app.js',
        path: '/',
    },
});


const app = new WebpackDevServer(compiler, {
    historyApiFallback: true,
    contentBase: '/public/',
    proxy: {
        '/graphql': {
            target: `http://localhost:${GRAPHQL_PORT}/${WS_GQL_PATH}`,
            ws: true,
        },
    },
    publicPath: '/js/',
    stats: { colors: true },
});

app.use('/', express.static(path.join(__dirname, 'public')));
app.listen(APP_PORT, () => {
    console.log(`App is now running on http://localhost:${APP_PORT}`);
});