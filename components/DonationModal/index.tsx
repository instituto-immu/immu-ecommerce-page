import { Button } from '@immu/@/components/ui/button';
import React, { useEffect, useState } from 'react';
import PixQRCode from '../PixQRCode';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [hasConfirmed, setHasConfirmed] = useState(false);


  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (hasConfirmed) {
      timer = setTimeout(() => {
        onClose();
        setHasConfirmed(false); // reseta para uma próxima abertura
      }, 7000); // 3 segundos
    }
    return () => clearTimeout(timer);
  }, [hasConfirmed, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        {!hasConfirmed ? (
          <>
            <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
              Apoie Nossa Causa 💖
            </h2>

            <p className="text-center text-gray-700 mb-4">
              Escaneie o QR Code ou use os dados abaixo para fazer sua doação.
            </p>

            <PixQRCode
              pixKey="46865616000126"
              name="Instituto Manancial Maos Unidas"
              city="Serra"
              className="mb-4"
            />

            <div className="bg-pink-50 p-3 rounded-lg mb-4">
              <p className="text-center font-semibold text-pink-700">Chave Pix:</p>
              <p className="text-center font-mono text-sm break-all">
              46865616000126
              </p>
            </div>

            <div className="mt-4 border-t border-gray-200 pt-4">
              <h3 className="text-lg font-semibold text-pink-600 mb-2 text-center">Dados Bancários</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Banco:</strong> Banco Cora SCD (403)</li>
                <li><strong>Agência:</strong> 0001</li>
                <li><strong>Conta:</strong> 2744433-1</li>
                <li><strong>Tipo:</strong> Conta Corrente</li>
                <li><strong>Favorecido:</strong> Instituto Manancial Mãos Unidas</li>
                <li><strong>CNPJ:</strong> 46.865.616/0001-26</li>
              </ul>
            </div>

            <div className="py-2 mt-4 flex items-center justify-center">
              <Button onClick={() => setHasConfirmed(true)}>
                Por favor nos avise para agradecermos
              </Button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-12 px-4">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Muito obrigado! 💕</h2>
            <p className="text-gray-700 max-w-sm">
              Recebemos sua doação com gratidão. Sua contribuição nos ajuda a continuar impactando vidas. 💫
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationModal;
