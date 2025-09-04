export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
            Hello World
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Welcome to your Next.js application with Tailwind CSS and shadcn/ui components
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <div className="px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200">
            <span className="text-sm font-medium text-gray-500">Built with</span>
            <span className="text-sm font-semibold text-indigo-600 ml-2">Next.js 15</span>
          </div>
          <div className="px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200">
            <span className="text-sm font-medium text-gray-500">Styled with</span>
            <span className="text-sm font-semibold text-indigo-600 ml-2">Tailwind CSS</span>
          </div>
        </div>
        
        <div className="pt-8">
          <p className="text-sm text-gray-500">
            Ready to start building something amazing? ✨
          </p>
        </div>
      </div>
    </div>
  )
}