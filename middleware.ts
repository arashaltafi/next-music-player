
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const rateLimitMap = new Map();

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/api')) {
        const ip = request.ip ?? "127.0.0.1";
        const limit = 100;
        const windowMs = 15 * 60 * 1000;
        if (!rateLimitMap.has(ip)) {
            rateLimitMap.set(ip, {
                count: 0,
                lastReset: Date.now(),
            });
        }
        const ipData = rateLimitMap.get(ip);
        if (Date.now() - ipData.lastReset > windowMs) {
            ipData.count = 0;
            ipData.lastReset = Date.now();
        }

        if (ipData.count >= limit) {
            const data = {
                success: false,
                response: {
                    message: "To Many Requests",
                },
            };
            return new NextResponse(JSON.stringify(data), {
                status: 429,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        ipData.count += 1;
    }
}