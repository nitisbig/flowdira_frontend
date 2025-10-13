'use client'
import { useContext } from "react"
import { ChatContext } from "@/hooks/userInputContext"

const ChatWindow = ()=>{
    const context = useContext(ChatContext)
        if (!context) {
        throw new Error('ChatWindow must be used within a ChatWrapper')
    }
    const {chat} = context

    // Show the title if chat is empty (null or empty string)
    if (!chat || chat.trim() === '') {
        return (
            <div className="flex-grow flex items-center justify-center">
                <h1 className="text-4xl font-bold text-center opacity-30">Flowdira works 24/7</h1>
            </div>
        )
    }

    // Otherwise show the chat content
    return(
        <div className="p-4">
            <div>User: {chat}</div>
            <div>AI: i am thinking about {chat}</div>
        </div>
    )
}

export default ChatWindow