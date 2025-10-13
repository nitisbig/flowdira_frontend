'use client'
import { useContext } from "react"
import { ChatContext } from "@/hooks/userInputContext"
import MarkDownText from "@/utils/chatMarkdown"

const ChatWindow = ()=>{
    const context = useContext(ChatContext)
    if (!context) {
        throw new Error('ChatWindow must be used within a ChatWrapper')
    }
    const { chatList } = context

    // Show the title if chat list is empty
    if (chatList.length === 0) {
        return (
            <div className="flex-grow flex items-center justify-center">
                <h1 className="text-4xl font-bold text-center opacity-30">Flowdira works 24/7</h1>
            </div>
        )
    }

    // Otherwise show the list of chat messages
    return(
        <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
            {chatList.map((chatItem) => (
                <div key={chatItem.chatId} className="border-b pb-4">
                    <div className="font-semibold text-gray-700">
                        You: <span className="font-normal">{chatItem.humanMessage}</span>
                    </div>
                    <div className="font-semibold text-blue-700 mt-2">
                        AI: 
                        <MarkDownText message={chatItem.aiMessage} />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                        {chatItem.date.toLocaleString()}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChatWindow