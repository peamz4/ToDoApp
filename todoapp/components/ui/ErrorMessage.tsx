'use client';

interface ErrorMessageProps {
  message: string;
  onDismiss: () => void;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onDismiss, onRetry }: ErrorMessageProps) {
  return (
    <div className="relative mb-6 group">
      {/* Background glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative bg-gradient-to-br from-red-50 to-rose-50 backdrop-blur-xl border border-red-200/50 rounded-3xl p-6 shadow-2xl">
        <div className="flex items-start gap-4">
          {/* Icon container */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Something went wrong</h3>
            <p className="text-red-700 leading-relaxed">{message}</p>
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {onRetry && (
              <button
                onClick={onRetry}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Retry
              </button>
            )}
            
            <button
              onClick={onDismiss}
              className="p-2 text-red-400 hover:text-red-600 hover:bg-red-100 rounded-2xl transition-all duration-300 hover:scale-110"
              title="Dismiss error"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-white/0 via-white/10 to-white/20 pointer-events-none"></div>
      </div>
    </div>
  );
}
