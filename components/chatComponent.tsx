
"use client"

export default function ChatComponent() {

    return (
        <div>
            {/* Text messages */}
            
          <form className="mt-12">
            <p>User Prompt</p>
            <textarea 
            className="mt-2 w-full bg-slate-600 p-2"
            placeholder={"Please type your request here."}
            />
          </form>

        </div>
    )
}