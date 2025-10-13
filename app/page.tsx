import ChatBox from "@/components/chatBox";
import ChatWindow from "@/components/chatWindow";
import { ChatWrapper } from "@/hooks/userInputContext";


export default function Home(){
  
  return(
    <div className="flex flex-col min-h-screen">
      <ChatWrapper>
        <div className="flex-grow">
          <ChatWindow />
        </div>
        <div className="sticky bottom-0 bg-white">
          <ChatBox />
        </div>
      </ChatWrapper>
    </div>
  )
}