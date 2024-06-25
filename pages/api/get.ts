import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const url: any = req.query.apiRoute;
    let config = {
        method: 'get',
        url: url,
        baseURL: process.env.BASE_URL,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${req.cookies.token}`,
        },
        data: {},
        params: {},
    };

    try {
        const success = true;
        const { data: response } = await axios(config);
        res.json({ response, success });
    } catch (error: any) {
        const success = false;
        console.log(error);
        res.status(error.response.status).json({ success, response: error.response.data });
    }
}