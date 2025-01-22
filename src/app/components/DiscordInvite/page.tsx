"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DiscordLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
    <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path>
  </svg>
)

const DiscordInvite: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-[#5865F2] p-3 rounded-full cursor-pointer shadow-lg hover:shadow-[#5865F2]/20 hover:shadow-xl transition-shadow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <DiscordLogo className="text-white w-5 h-5" />
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute left-[calc(100%-1.5rem)] mt-1 top-2/2 transform -translate-y-1/2 w-56 bg-[#2f3136] rounded-lg shadow-xl z-10 overflow-hidden border border-[#1f2225]/50"
          >
            <div className="relative">
              <div className="w-full h-16 bg-gradient-to-br from-[#5865F2] via-[#4752C4] to-[#454FBF]" />
              <div className="absolute -bottom-4 left-3">
                <div className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-sm font-bold border-3 border-[#2f3136] shadow-lg">
                  AS
                </div>
              </div>
            </div>

            <div className="p-4 pt-8">
              <h3 className="font-bold text-base text-white mb-1">Awesome Server</h3>
              <p className="text-xs text-[#b9bbbe] mb-2">Join the coolest Discord community!</p>
              <div className="flex items-center text-[#b9bbbe] text-xs mb-3">
                <div className="flex items-center mr-3 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></div>
                  1,234 Online
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b9bbbe] mr-1"></div>
                  5,678 Members
                </div>
              </div>
              <button 
                className="w-full bg-[#5865F2] text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-[#4752C4] transition-all duration-200 hover:shadow-lg hover:shadow-[#5865F2]/20"
              >
                Accept Invite
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DiscordInvite

