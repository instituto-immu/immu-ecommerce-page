import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { QrCodePix } from 'qrcode-pix';

type PixQRCodeProps = {
  pixKey: string;
  name: string;
  city: string;
  amount?: number; // valor opcional
  size?: number; // tamanho do QR Code
  className?: string;
};

function PixQRCode  ({
  pixKey,
  name,
  city,
  amount,
  size = 256,
  className = '',
}: PixQRCodeProps) {
  const [payload, setPayload] = useState('');

    useEffect(() => {
        const generatePix = async () => {
            const qrPix = QrCodePix({
                version: '01',
                key: pixKey,
                name,
                city,
                value: amount,
            });

            const code = await qrPix.payload();
        setPayload(code);
    };

    generatePix();
  }, [pixKey, name, city, amount]);

  if (!payload) {
    return <p className="text-center">Gerando QR Code...</p>;
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <QRCode value={payload} size={size} />
    </div>
  );
};

export default PixQRCode;
