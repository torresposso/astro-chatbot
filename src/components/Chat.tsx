import { useChat } from "ai/react";
import Markdown from "react-markdown";

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    console.log("content:", messages);
    return (
        <div className="flex flex-col">
            {messages.map((m) => (
                <div key={m.id} className="whitespace-pre-wrap text-3xl">
                    {m.role === "user" ? "User: " : "AI: "}

                    <Markdown>{m.content}</Markdown>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input
                    className="w-full p-2 mb-8 border border-gray-300 rounded shadow-xl text-black"
                    value={input}
                    placeholder="What's your question?"
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}
