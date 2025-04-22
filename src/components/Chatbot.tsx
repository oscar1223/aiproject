import { useState } from 'react'
import { Send } from 'lucide-react'

export interface Message { id: number; text: string; sender: 'user' | 'bot' }

interface ChatbotProps { uploadedPdfs: { id: string; name: string; url: string }[] }

export default function Chatbot({ uploadedPdfs }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Bienvenido a ChatPDF, ¿en qué puedo ayudarte?', sender: 'bot' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return
    const userMsg: Message = { id: Date.now(), text: input, sender: 'user' }
    setMessages([...messages, userMsg])
    setInput('')
    setIsLoading(true)

    setTimeout(() => {
      const botMsg: Message = { id: Date.now()+1, text: 'Respuesta simulada basada en ' + uploadedPdfs.map(p => p.name).join(', '), sender: 'bot' }
      setMessages(prev => [...prev, botMsg])
      setIsLoading(false)
    }, 1200)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto mb-4 space-y-3">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <span className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
              {msg.text}
            </span>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <span className="max-w-xs px-4 py-2 rounded-lg bg-gray-200 text-gray-800 animate-pulse">
              Escribiendo...
            </span>
          </div>
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-grow border px-3 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={isLoading}
          placeholder="Escribe tu mensaje..."
        />
        <button
          onClick={handleSend}
          className="px-4 bg-blue-600 text-white rounded-r hover:bg-blue-700 transition disabled:opacity-50"
          disabled={isLoading}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
