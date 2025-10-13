'use client'
import React, { ReactNode, createContext, useState } from "react";

interface ChatMessageType {
    humanMessage: string;
    aiMessage: string;
    chatId: string;
    date: Date;
}

interface ChatType {
    chatList: ChatMessageType[];
    setChatList: React.Dispatch<React.SetStateAction<ChatMessageType[]>>;
    addChat: (humanMessage: string, aiMessage: string) => void;
}

export const ChatContext = createContext<ChatType | undefined>(undefined);

interface WrapperType {
    children: ReactNode;
}

export const ChatWrapper: React.FC<WrapperType> = ({ children }) => {
    const [chatList, setChatList] = useState<ChatMessageType[]>([]);

    const addChat = (humanMessage: string, aiMessage: string) => {
        const newChat: ChatMessageType = {
            humanMessage,
            aiMessage,
            chatId: `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, // Generate unique ID
            date: new Date()
        };
        setChatList(prevList => [...prevList, newChat]);
    };

    return (
        <ChatContext.Provider value={{ chatList, setChatList, addChat }}>
            {children}
        </ChatContext.Provider>
    );
};