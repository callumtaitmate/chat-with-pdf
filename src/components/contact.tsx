import React, { useState } from 'react';
import Router, { useRouter } from 'next/navigation';

const TopBar: React.FC = () => {
    const [visible, setVisible] = useState(true);
    const route = useRouter();

    if (!visible) return null;

    return (
        <div className="bg-indigo-200 text-gray-700 flex justify-between items-center px-2 py-1 border-b rounded-md border-gray-300">



            <span className="mr-4">📢 This tool is in beta</span>
            <div className="flex items-center py-1 text-sm space-x-1">
                <button
                    className="bg-indigo-600 my-1 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition"
                    onClick={() => route.push('/dashboard')}
                >
                    Try Regardless
                </button>


                <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setVisible(false)}
                >
                    ✖
                </button>
            </div>
        </div>
    );
};

export default TopBar;
