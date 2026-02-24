import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        const db = await getDb();
        const result = await db.get('SELECT content FROM pages WHERE id = ?', [id]);

        if (result) {
            return NextResponse.json({ content: result.content });
        } else {
            // Return empty content if not found
            return NextResponse.json({ content: '' });
        }
    } catch (error) {
        console.error('Error fetching content:', error);
        return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const cookieLogin = request.cookies.get('admin_token')?.value;

    if (cookieLogin !== '1234') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { content } = await request.json();
        const db = await getDb();

        // Upsert logic using INSERT OR REPLACE
        await db.run('INSERT OR REPLACE INTO pages (id, content) VALUES (?, ?)', [id, content]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error updating content:', error);
        return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
    }
}
