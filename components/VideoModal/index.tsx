'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo-immu-footer.png'

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border-4 border-[#9b4f96] flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Header com logotipo e botão de fechar */}
            <div className="flex justify-between items-center p-3 bg-[#9b4f96]">
              <div className="flex items-center space-x-4">
                {/* Logotipo de exemplo */}
                <Image
                  src={logo}
                  alt="Logo"
                  className="h-11 w-auto"
                />
                <span className="text-white font-semibold text-lg">Assista ao vídeo</span>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-[#e84c8e] transition"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
            </div>

            {/* Corpo com vídeo */}
            <div className="aspect-video w-full">
              <div className="w-full h-full overflow-hidden">
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                  className="rounded-none"
                />
              </div>
            </div>

            {/* Rodapé com botão/link para canal */}
            <div className="bg-[#fdf4f9] py-4 px-6 flex justify-center">
              <a
                href="https://www.youtube.com/@immuvideos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-[#e84c8e] hover:bg-[#9b4f96] font-medium py-2 px-4 rounded-full shadow transition"
              >
                Conheça nosso canal no YouTube
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
