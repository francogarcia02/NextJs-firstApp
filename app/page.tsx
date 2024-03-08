'use client'
import {useState} from 'react';

export default function Page() {
    const [input, setInput] = useState()
    const [messages, setMessages] = useState<any[]>([
        {
        role: 'system',
        content: 'Cuota de uso de la api exedida'
        }
    ])

    const handleSubmit  = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(input){
            const newMessage = {
                role: 'user',
                content: input
            }
            const newMessages = [...messages, newMessage]
            setInput('')
            setMessages(newMessages)
            sendMessages(newMessages)
        }
    }

    const changeInput = (e: FormEvent<HTMLTextAreaElement>) => {
       setInput(e.currentTarget.value)
    }

    const sendMessages = async (messages: any[]) => {
        const response = await fetch('api/chat', {
            method: 'POST',
            body: JSON.stringify({messages})
        })
        const data = await response.json();
        setMessages(prevData=> [...prevData, data.choices[0].message])
    }

    return(
        <div className="flex min-h-screen flex-col p-6">
            {messages && messages.map((message, index) =>(
                <div className={`chat ${message.role === 'user' ? 'chat-end' : 'chat-start'}`} key={index}>
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="chat-bubble">{message.content}</div>
                </div>
            ))}
            <div className="w-full">
                <form onSubmit={handleSubmit} className="flex w-full flex-col space-y-2">
                    <textarea onChange={changeInput} value={input} placeholder="Escriba aqui" className={`textarea textarea-lg textarea-sm textarea-bordered`}></textarea>
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}
