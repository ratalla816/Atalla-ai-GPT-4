
"use client"
import { useChat, Message } from "ai/react"

export default function ChatComponent() {
    // Vercel AI SDK (ai package) useChat()
    // useChat -> handles messages, user input, handles user submits
    
    // object destructuring
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();

    console.log(messages);
    console.log(input);

    return (
        <div>
            
            {messages.map((message : Message) => {
                return (
                    <div key={message.id}>
                        {/* Name of person talking */}
                        {
                            message.role === "assistant"
                            ?
                            <h3 className="text-lg font-semibold mt-2">
                                Atalla-ai
                            </h3>
                            :
                            <h3 className="text-lg font-semibold mt-2">
                                User
                            </h3>
                        }

                            {message.content.split("\n").map((currentTextBlock: string, index : number) => {
                                if(currentTextBlock === "" ) {
                                    return <p key={message.id + index}>%nbsp;</p> // creates a space " "
                                } else {
                                    return <p key={message.id + index}>{currentTextBlock}</p>
                                }   
                             })}


                        </div>
                      )
                  })}
            
                
          <form className="mt-12" onSubmit={ handleSubmit }>
            <p>User Prompt</p>
            <textarea 
            id="textArea"
            className="mt-2 w-full bg-slate-600 p-2"
            placeholder={"Please type your request here."}
            value={ input }
            onChange={ handleInputChange }
            />
            <button className="rounded-md bg-blue-600 p-2 mt-2 ">
                Submit
            </button>
          </form>

        </div>
    )
}