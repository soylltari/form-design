import {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { paymentMethods } from "./data";

export interface PaymentSectionHandle {
  validate: () => boolean;
  getData: () => {
    method: string;
    cardNumber: string;
    expiry: string;
    cvc: string;
  };
}

const PaymentSection = forwardRef<PaymentSectionHandle>((props, ref) => {
  const [cardParts, setCardParts] = useState(["", "", "", ""]);
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const activeMethod = "privat24";

  const [errors, setErrors] = useState({
    cardNumber: false,
    expiry: false,
    cvc: false,
  });

  const cardInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const validateSection = () => {
    const isCardValid = cardParts.every((part) => part.length === 4);
    const isExpiryValid = expiry.length === 5;
    const isCvcValid = cvc.length === 3;

    setErrors({
      cardNumber: !isCardValid,
      expiry: !isExpiryValid,
      cvc: !isCvcValid,
    });

    return isCardValid && isExpiryValid && isCvcValid;
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      return validateSection();
    },
    getData: () => {
      return {
        method: activeMethod,
        cardNumber: cardParts.join(""),
        expiry,
        cvc,
      };
    },
  }));

  const handleCardPartChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newParts = [...cardParts];
    newParts[index] = value;
    setCardParts(newParts);
    if (errors.cardNumber)
      setErrors((prev) => ({ ...prev, cardNumber: false }));
    if (value.length === 4 && index < 3) {
      cardInputRefs.current[index + 1]?.focus();
    }
  };

  const handleCardKeyDown = (
    index: number,
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !cardParts[index] && index > 0) {
      cardInputRefs.current[index - 1]?.focus();
    }
  };

  const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length >= 3) {
      val = val.slice(0, 2) + "/" + val.slice(2, 4);
    }
    setExpiry(val);
    if (errors.expiry) setErrors((prev) => ({ ...prev, expiry: false }));
  };

  const handleCvcChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return;
    setCvc(val);
    if (errors.cvc) setErrors((prev) => ({ ...prev, cvc: false }));
  };

  return (
    <div className="relative mt-8 border-2 border-secondary-200 rounded-2xl p-4.5 md:p-8 w-full bg-white">
      {/* Triangle */}
      <div className="hidden md:block absolute -top-3.5 left-[30%] w-6 h-6 bg-white border-t-2 border-l-2 border-secondary-200 transform rotate-45"></div>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
        <div className="flex-1">
          <h4>Спосіб оплати</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {paymentMethods.map((method) => {
              const isActive = activeMethod === method.id;
              return (
                <button
                  type="button"
                  key={method.id}
                  className={`
                p-2 h-24 rounded-lg flex flex-col items-center justify-end transition-all
                ${isActive ? "bg-accent" : "bg-secondary-200 hover:bg-accent"}
              `}
                >
                  <div className="mb-auto pt-3 flex items-center justify-center">
                    {method.Visual}
                  </div>
                  <p className="text-white font-geometria text-[10px] ">
                    {method.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1">
          <h4>Введіть наступні дані</h4>
          <div className="bg-secondary-200 rounded-xl p-3 md:p-6 focus-within:bg-accent/90 transition-all">
            <label className="block text-white font-geometria text-sm mb-1">
              Номер карти
            </label>
            <div className="grid grid-cols-4 gap-2 md:flex md:gap-3 mb-6">
              {cardParts.map((part, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    cardInputRefs.current[index] = el;
                  }}
                  type="tel"
                  inputMode="numeric"
                  maxLength={4}
                  value={part}
                  onChange={(e) => handleCardPartChange(index, e.target.value)}
                  onKeyDown={(e) => handleCardKeyDown(index, e)}
                  className={`
                    w-full bg-secondary-100 rounded-md py-1 md:py-2 md:px-2 text-center 
                    focus:outline-none focus:ring-2 transition-all
                    ${
                      errors.cardNumber
                        ? "ring-2 ring-red-500 bg-red-50"
                        : "focus:ring-accent"
                    }
                  `}
                />
              ))}
            </div>

            <div className="flex gap-2 md:gap-24">
              <div className="flex-1">
                <label className="block text-white font-geometria text-sm mb-1">
                  Термін дії
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={5}
                  value={expiry}
                  onChange={handleExpiryChange}
                  className={`
                    w-full bg-secondary-100 rounded-md py-2 px-2 text-center 
                    focus:outline-none focus:ring-2 transition-all
                    ${
                      errors.expiry
                        ? "ring-2 ring-red-500 bg-red-50"
                        : "focus:ring-accent"
                    }
                  `}
                />
              </div>
              <div className="flex-1">
                <label className="block text-white font-geometria text-sm mb-1">
                  CVC/CVV
                </label>
                <input
                  type="password"
                  inputMode="numeric"
                  maxLength={3}
                  value={cvc}
                  onChange={handleCvcChange}
                  className={`
                    w-full bg-secondary-100 rounded-md py-2 px-2 text-center 
                    focus:outline-none focus:ring-2 transition-all
                    ${
                      errors.cvc
                        ? "ring-2 ring-red-500 bg-red-50"
                        : "focus:ring-accent"
                    }
                  `}
                />
              </div>
            </div>
            {(errors.cardNumber || errors.expiry || errors.cvc) && (
              <div className="mt-1 text-red-500 text-[10px]">
                Перевірте правильність введених даних
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default PaymentSection;
