import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export interface UploadedPDF { id: string; name: string; url: string }

interface PDFUploadProps { onUpload: (files: UploadedPDF[]) => void }

export default function PDFUpload({ onUpload }: PDFUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [files, setFiles] = useState<UploadedPDF[]>([])

  const onDrop = useCallback(async (accepted: File[]) => {
    setUploading(true)
    const uploaded: UploadedPDF[] = []
    for (const file of accepted) {
      const fakeId = Date.now().toString()
      uploaded.push({ id: fakeId, name: file.name, url: URL.createObjectURL(file) })
    }
    const all = [...files, ...uploaded]
    setFiles(all)
    onUpload(all)
    setUploading(false)
  }, [files, onUpload])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {'application/pdf': ['.pdf']} })

  return (
    <div className="mb-4">
      <div
        {...getRootProps()}
        className={`p-6 border-2 border-dashed rounded-lg text-center transition-colors cursor-pointer ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}`}
      >
        <input {...getInputProps()} disabled={uploading} />
        {uploading ? (
          <p className="text-gray-500">Subiendo...</p>
        ) : (
          <p className="text-gray-700">Arrastra tus PDFs o haz clic aquí para seleccionar</p>
        )}
      </div>
      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map(f => (
            <li key={f.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
              <span className="truncate">{f.name}</span>
              <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                Ver
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}