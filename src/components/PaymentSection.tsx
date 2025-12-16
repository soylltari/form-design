import { paymentMethods } from "./data";

export default function PaymentSection() {
  return (
    <div className="relative mt-8 border-2 border-secondary-200 rounded-2xl p-4.5 md:p-8 w-full bg-white">
      {/* Triangle */}
      <div className="hidden md:block absolute -top-3.5 left-[30%] w-6 h-6 bg-white border-t-2 border-l-2 border-secondary-200 transform rotate-45"></div>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
        <div className="flex-1">
          <h4>Спосіб оплати</h4>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {paymentMethods.map((method) => {
              const isActive = "privat24" === method.id;

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
              {[1, 2, 3, 4].map((i) => (
                <input
                  key={i}
                  type="tel"
                  inputMode="numeric"
                  maxLength={4}
                  className="w-full bg-secondary-100 rounded-md py-1 md:py-2 md:px-2 text-center focus:ring-2 focus:ring-accent focus:outline-none"
                />
              ))}
            </div>

            <div className="flex gap-2 md:gap-24">
              <div className="flex-1">
                <label className="block text-white font-geometria text-sm mb-1">
                  Термін дії
                </label>
                <input
                  type="text"
                  className="w-full bg-secondary-100 rounded-md py-2 px-2 text-center focus:ring-2 focus:ring-accent focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-white font-geometria text-sm mb-1">
                  CVC/CVV
                </label>
                <input
                  type="password"
                  maxLength={3}
                  className="w-full bg-secondary-100 rounded-md py-2 px-2 text-center focus:ring-2 focus:ring-accent focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
