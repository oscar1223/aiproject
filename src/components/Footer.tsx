export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-8">
      <div className="container mx-auto text-center text-gray-600">
        © {new Date().getFullYear()} ChatPDF. Todos los derechos reservados.
      </div>
    </footer>
  )
}
