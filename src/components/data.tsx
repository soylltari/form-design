import HandIcon from "../assets/hand.svg?react";
import WalletIcon from "../assets/wallet.svg?react";
import ShirtIcon from "../assets/shirt.svg?react";
import HeartIcon from "../assets/heart.svg?react";
import MasterCardIcon from "../assets/mastercard.svg?react";
import VisaIcon from "../assets/visa.svg?react";
import TerminalIcon from "../assets/atm.svg?react";
import WebMoneyIcon from "../assets/webmoney.svg?react";
import PayPalIcon from "../assets/paypal.svg?react";

export const helpTypeButtons = [
  { id: "make", label: "Зробити", Icon: HandIcon },
  { id: "financial", label: "Фінансова допомога", Icon: WalletIcon },
  { id: "material", label: "Матеріальна допомога", Icon: ShirtIcon },
  { id: "volunteer", label: "Волонтерство", Icon: HeartIcon },
];

export const paymentMethods = [
  {
    id: "visa",
    label: "Карта Visa/MasterCard",
    Visual: (
      <div className="flex gap-4">
        <MasterCardIcon className="w-10 h-10 mx-auto" />
        <VisaIcon className="w-10 h-10 mx-auto" />
      </div>
    ),
  },
  {
    id: "privat24",
    label: "Приват24",
    Visual: <span className="font-bold text-xl text-white pt-1">Приват24</span>,
  },
  {
    id: "terminal",
    label: "Термінали України",
    Visual: <TerminalIcon className="w-12 h-12 mx-auto" />,
  },
  {
    id: "webmoney",
    label: "WebMoney",
    Visual: <WebMoneyIcon className="w-10 h-10 mx-auto" />,
  },
  {
    id: "paypal",
    label: "PayPal",
    Visual: <PayPalIcon className="w-12 h-12 mx-auto" />,
  },
];
