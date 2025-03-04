import { ReactNode, useState } from "react";


export default function CollapsibleMenu(props: { title: string, children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mt-4 border rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 transition"
            >
                <span className="text-lg font-semibold">{props.title}</span>
                <span>{isOpen ? "▲" : "▼"}</span>
            </button>
            <div
                className={`transition-max-height duration-200 overflow-hidden ${isOpen ? '' : 'max-h-0'}`}
            >
                <div className="p-4 border-t bg-white">
                    {props.children}
                </div>
            </div>
        </div>
    );
}