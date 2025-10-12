

'use client'

import { useState, useContext } from 'react'
import { ChatContext } from '@/hooks/userInputContext'


const ChatBox = () => {
    const context = useContext(ChatContext)
    const {chat, setChat} = context
    const [inputText, setInputText] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Add your chat submission logic here
        
        if (inputText.trim()) {
            console.log('Sending message:', inputText)
            setChat(inputText)
        }
        alert(chat)
    }

    return (
        <div className="flex flex-col w-full max-w-4xl mx-auto p-4">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Enter
                </button>
            </form>
        </div>
    )
}

export default ChatBox