import { Button } from "@immu/@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@immu/@/components/ui/dialog";
import { ICartProduct } from "@immu/app/hooks/useCart";
import PixQRCode from "../PixQRCode";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  cartItems: ICartProduct[];
  totalPrice: string;
}

export function CheckoutModal({ open, onClose, cartItems, totalPrice }: CheckoutModalProps) {
  const message = `
Olá, eu gostaria de efetuar estas compras:
${cartItems.map(item => `• ${item.quantity}x ${item.title} (${item.essence}) - R$ ${(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}`).join('\n')}
Total: R$ ${totalPrice}

📌 Chave Pix: 46865616000126
🏦 Conta Corrente:
Banco: Banco Cora SCD (403)
Agência: 0001
Conta: 2744433-1
Favorecido: Instituto Manancial Mãos Unidas
CNPJ: 46.865.616/0001-26
`.trim();

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/+5527992575998?text=${encodedMessage}`;

  return (
    <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-md w-full rounded-xl p-0 sm:p-2 flex flex-col h-[90vh] sm:h-auto">
            <div className="overflow-y-auto px-4 sm:px-6 py-4 space-y-4">
                <DialogTitle className="text-lg sm:text-xl font-bold text-center">
                    Como Finalizar Sua Compra
                </DialogTitle>

                <p className="text-sm sm:text-base text-gray-700 text-center">
                    O pagamento será feito por <strong>Pix</strong> ou <strong>depósito/transferência</strong> em conta bancária.
                    Após o pagamento, envie o comprovante por WhatsApp.
                </p>

                <div className="text-left text-sm text-gray-600 space-y-1">
                    <p className="font-semibold">⚠️ Regras:</p>
                    <ul className="list-disc pl-5">
                    <li>Pagamentos via <strong>Pix</strong> são confirmados rapidamente.</li>
                    <li>Transferência bancária requer <strong>confirmação manual</strong>.</li>
                    <li>Atendimento em horário comercial.</li>
                    </ul>
                </div>

                <div className="flex flex-col items-center space-y-3 pt-2">
                    <p className="text-sm font-medium text-gray-700 text-center">
                    Se preferir usar o QR Code, ele está disponível abaixo:
                    </p>

                    <PixQRCode
                    pixKey="46865616000126"
                    name="Instituto Manancial Maos Unidas"
                    city="Serra"
                    amount={Number(totalPrice)}
                    className="max-w-[180px] sm:max-w-[220px] w-full h-auto"
                    />

                    <p className="text-base font-semibold text-center">
                    Total da compra: <span className="text-manancial-purple">R$ {totalPrice}</span>
                    </p>
                </div>
            </div>

            {/* Botão fixo no final */}
            <div className="border-t border-gray-200 p-4">
                <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-white w-full text-base py-3"
                >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Seguir para o WhatsApp
                    </a>
                </Button>
            </div>
        </DialogContent>
    </Dialog>
  );
}
