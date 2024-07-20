
"use client"
import { useChat }from "ai/react"

export default function ChatComponent() {
    // Vercel AI SDK (ai package) useChat()
    // useChat -> handles messages, user input, handles user submits
    
    // object destructuring
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();

    console.log(messages);
    console.log(input);

    return (
        <div>
            {/* Text messages */}
            <div>
                <h3 className="text-lg font-semibold mt-2">Atalla-ai</h3>
                <p>I am a bot powered by GPT-4</p>
            </div>

            <div>
                <h3 className="text-lg font-semibold mt-2">User</h3>
                <p>I am human</p>
            </div>
            
          <form className="mt-12" onSubmit={ handleSubmit }>
            <p>User Prompt</p>
            <textarea 
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