import React, { useState } from 'react';
import Router, { useRouter } from 'next/navigation';

const TopBar: React.FC = () => {
    const [visible, setVisible] = useState(true);
    const route = useRouter();

    if (!visible) return null;

    return (
        <div className="bg-indigo-200 text-gray-700 flex justify-between items-center px-4 py-2 border-b rounded-md border-gray-300">


            <div className="flex-col items-center py-2">
                <span className="mr-4">📢 This tool is in beta.</span>
                <button
                    className="bg-indigo-600 my-3 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition"
                    onClick={() => route.push('/dashboard')}
                >
                   Let me try anyway.
                </button>
            </div>

            <button
                className="text-gray-500 hover:text-gray-700 px-1 py-1"
                onClick={() => setVisible(false)}
            >
                ✖
            </button>
        </div>
    );
};

export default TopBar;
