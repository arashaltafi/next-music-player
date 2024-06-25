import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import https from "https";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const requestMethod = req.method;
    const body = JSON.parse(req.body);
    let Token = req.cookies.token;

    const agent = new https.Agent({
        rejectUnauthorized: false,
    });

    let config = {
        method: requestMethod,
        url: body.apiRoute,
        baseURL: process.env.BASE_URL,
        headers: {
            Authorization: `Bearer ${Token}`,
        },
        data: body.data,
        params: {},
        httpsAgent: agent,
    };
    try {
        const success = true;
        const { data: response } = await axios(config);
        res.json({ response, success });
    } catch (error: any) {
        const success = false;
        console.log(error);
        let response = error.response.data;
        res.status(error.response.status).json({ response, success });
    }
}