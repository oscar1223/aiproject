import { useState } from 'react'
import Chatbot from '../components/Chatbot'
import PDFUpload, { UploadedPDF } from '../components/PDFUpload'

export default function ChatPage() {
  const [pdfs, setPdfs] = useState<UploadedPDF[]>([])
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/3">
        <PDFUpload onUpload={setPdfs} />
      </div>
      <div className="w-full lg:w-2/3">
        <Chatbot uploadedPdfs={pdfs} />
      </div>
    </div>
  )
}