import { useState, type ChangeEvent } from "react";
import Input from "./Input";
import { helpTypeButtons, paymentMethods } from "./data";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    address: "",
    zipCode: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button className="absolute text-3xl top-5 right-1/6">✕</button>

      <div className="flex flex-col items-center my-12 h-full bg-white mx-10 md:mx-52 py-12 px-16 shadow-md shadow-gray-500 rounded-xl">
        <h1>Заповніть форму</h1>
        <div className="mt-5">
          <button className="text-xs px-3 py-1.5 rounded-l-sm border-2 border-primary bg-primary text-white">
            Фіз. особа
          </button>
          <button className="text-xs px-3 py-1.5 rounded-r-sm border-2 border-primary transition-all hover:bg-primary hover:text-white">
            Юр. особа
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-52 gap-y-1 my-12">
          <div>
            <div className="flex gap-4">
              <Input
                id="firstName"
                type="firstName"
                label="Ім'я"
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                id="lastName"
                type="lastName"
                label="Фамілія"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <Input
                id="company"
                type="company"
                label="Назва компанії, організації"
                value={formData.company}
                onChange={handleChange}
              />
              <button className="absolute left-full top-7 ml-4 text-sm text-blue-500 hover:text-blue-700 whitespace-nowrap transition-all">
                + Логотип
              </button>
            </div>
            <Input
              id="email"
              type="email"
              label="Email-адрес"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              id="phone"
              type="phone"
              label="Номер телефону"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              id="country"
              type="country"
              label="Країна"
              value={formData.country}
              onChange={handleChange}
            />
            <div className="flex gap-4">
              <Input
                id="city"
                type="city"
                label="Місто"
                value={formData.city}
                onChange={handleChange}
              />
              <Input
                id="state"
                type="state"
                label="Штат, район"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <Input
              id="address"
              type="address"
              label="Адреса"
              value={formData.address}
              onChange={handleChange}
            />
            <Input
              id="zipCode"
              type="zipCode"
              label="Поштовий індекс"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <h1>Види допомоги</h1>
        <h3 className="mt-2 mb-5">Ви можете змінити вид допомоги</h3>
        <div className="w-full flex justify-between">
          {helpTypeButtons.map(({ id, label, Icon }) => {
            const isActive = "financial" === id;
            return (
              <button
                key={id}
                className="group flex items-center gap-4 focus:outline-none transition-all"
              >
                <div
                  className={`
                w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all
                ${
                  isActive
                    ? "bg-accent border-accent"
                    : "bg-white border-secondary-200 group-hover:border-accent"
                }
              `}
                >
                  <Icon
                    title={label}
                    className={`
                  w-8 h-8 transition-all
                  
                  ${
                    isActive
                      ? "text-white"
                      : "text-secondary-200 group-hover:text-accent"
                  }
                `}
                  />
                </div>
                <span
                  className={`text-md text-left w-24 leading-tight transition-all
                ${
                  isActive
                    ? "text-primary"
                    : "text-gray-300 group-hover:text-primary"
                }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
        <div className="relative mt-8 border-2 border-secondary-200 rounded-2xl p-8 w-full bg-white">
          {/* Triangle */}
          <div className="absolute -top-3.5 left-[29%] w-6 h-6 bg-white border-t-2 border-l-2 border-secondary-200 transform rotate-45"></div>

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h4>Спосіб оплати</h4>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {paymentMethods.map((method) => {
                  const isActive = "privat24" === method.id;

                  return (
                    <button
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

              <div className="bg-secondary-200 rounded-xl p-6 focus-within:bg-accent/90 transition-all">
                <label className="block text-white font-geometria text-sm mb-1">
                  Номер карти
                </label>
                <div className="flex gap-3 mb-6">
                  {[1, 2, 3, 4].map((i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={4}
                      className="w-full bg-secondary-100 rounded-md py-2 px-2 text-center focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                  ))}
                </div>

                <div className="flex gap-24">
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
        <div className="mt-10 flex justify-center">
          <button className="bg-linear-to-r from-red-500 to-accent text-white px-12 py-3 rounded-lg font-bold text-lg shadow-[0_4px_24px_0px_rgba(239,68,68,0.6)] hover:opacity-90 transition-all">
            Допомогти
          </button>
        </div>
      </div>
    </>
  );
}
