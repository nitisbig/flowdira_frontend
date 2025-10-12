'use client'
import React, { ReactNode, createContext, useState } from "react";

interface ChatType {
    chat: string | null;
    setChat: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ChatContext = createContext<ChatType | undefined>(undefined);

interface WrapperType {
    children: ReactNode;
}

export const ChatWrapper: React.FC<WrapperType> = ({ children }) => {
    const [chat, setChat] = useState<string | null>(null);

    return (
        <ChatContext.Provider value={{ chat, setChat }}>
            {children}
        </ChatContext.Provider>
    );
};