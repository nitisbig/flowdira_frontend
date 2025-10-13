

'use client'

import { useState, useContext } from 'react'
import { ChatContext } from '@/hooks/userInputContext'
import axios from 'axios'

const ChatBox = () => {
    const context = useContext(ChatContext)
    if (!context) {
        throw new Error('ChatBox must be used within a ChatWrapper')
    }
    const { addChat } = context
    const [inputText, setInputText] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputText.trim()) {
            axios.post('http://127.0.0.1:8000/api/v1', {'user_input': inputText}) .then((res)=>addChat(inputText, res.data.gen_text))
            setInputText('');
        }      
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
                    className="bg-gray-900 text-white rounded-lg px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Ask
                </button>
            </form>
        </div>
    )
}

export default ChatBox