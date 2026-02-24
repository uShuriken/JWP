import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { password } = await request.json();

        if (password === '1234') {
            const response = NextResponse.json({ success: true });
            response.cookies.set({
                name: 'admin_token',
                value: '1234',
                httpOnly: true,
                path: '/',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 // 1 day
            });
            return response;
        }

        return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error: 'Login failed' }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    const token = request.cookies.get('admin_token')?.value;
    return NextResponse.json({ authenticated: token === '1234' });
}
