'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState('Home');
    const [content, setContent] = useState<{ [key: string]: string }>({
        Home: '',
        Services: '',
        About: ''
    });
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check auth
        fetch('/api/login')
            .then(res => res.json())
            .then(data => {
                if (!data.authenticated) {
                    router.push('/admin/login');
                } else {
                    loadContent();
                }
            });
    }, []);

    const loadContent = async () => {
        const tabs = ['Home', 'Services', 'About'];
        const newContent = { ...content };

        for (const tab of tabs) {
            const res = await fetch(`/api/content/${tab}`);
            const data = await res.json();
            if (data.content) {
                newContent[tab] = data.content;
            }
        }

        setContent(newContent);
        setLoading(false);
    };

    const handleSave = async (tab: string) => {
        try {
            const res = await fetch(`/api/content/${tab}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: content[tab] })
            });

            if (res.ok) {
                alert('Saved successfully!');
            } else {
                alert('Failed to save.');
            }
        } catch (error) {
            alert('Error saving content.');
        }
    };

    const handleLogout = async () => {
        await fetch('/api/logout', { method: 'POST' });
        router.push('/');
    };

    if (loading) return <div className="p-8">Loading...</div>;

    const tabs = ['Home', 'Services', 'About'];

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 border rounded hover:bg-gray-100 transition"
                    >
                        Logout
                    </button>
                </div>

                <div className="flex space-x-2 mb-6 border-b">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 -mb-px border-b-2 font-medium text-sm transition-colors ${activeTab === tab
                                ? 'border-primary text-primary'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-700">{activeTab} Page Content</h2>
                    <p className="text-sm text-gray-500 mb-2">Use HTML to format the content if necessary.</p>
                    <textarea
                        value={content[activeTab] || ''}
                        onChange={(e) => setContent({ ...content, [activeTab]: e.target.value })}
                        className="w-full h-96 p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        placeholder={`Enter ${activeTab} page content here...`}
                    />
                    <button
                        onClick={() => handleSave(activeTab)}
                        className="bg-primary text-button-text px-6 py-2 rounded shadow hover:opacity-90 transition font-semibold"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
