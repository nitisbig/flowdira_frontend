import ChatBox from "@/components/chatBox";


export default function Home(){
  return(
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center opacity-30">Flowdira works 24/7</h1>
      </div>
      <div className="sticky bottom-0 bg-white">
        <ChatBox />
      </div>
    </div>
  )
}