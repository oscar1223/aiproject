'use client'

import React, { useState } from 'react'
import { Send } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "¡Hola! ¿En qué puedo ayudarte hoy?", sender: 'bot' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = { id: messages.length + 1, text: input, sender: 'user' }
      setMessages([...messages, newMessage])
      setInput('')
      
      // Simular respuesta del bot
      setTimeout(() => {
        const botResponse: Message = { id: messages.length + 2, text: "Gracias por tu mensaje. Estoy procesando tu solicitud.", sender: 'bot' }
        setMessages(prevMessages => [...prevMessages, botResponse])
      }, 1000)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-8">
      <div className="bg-gray-100 p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Chatbot</h2>
      </div>
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-end ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-500'}`}>
                {message.sender === 'user' ? 'U' : 'B'}
              </div>
              <div className={`max-w-xs px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none ml-2' : 'bg-gray-200 text-gray-800 rounded-bl-none mr-2'}`}>
                {message.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-4 border-t border-gray-200 text-black">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex space-x-2">
          <input 
            type="text" 
            placeholder="Escribe tu mensaje..." 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  )
}

