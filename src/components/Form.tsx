import { useState, type ChangeEvent } from "react";
import Input from "./Input";
import HelpTypeSection from "./HelpTypeSection";
import PaymentSection from "./PaymentSection";

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
      <button className="absolute text-xl md:text-3xl top-5 right-1/8 md:right-1/6">
        ✕
      </button>

      <form className="flex flex-col items-center h-full bg-white mx-5 md:mx-52 my-12 py-12 px-8 md:px-16 shadow-md shadow-gray-500 rounded-xl">
        <h1>Заповніть форму</h1>
        <div className="mt-5">
          <button
            type="button"
            className="text-xs px-3 py-1.5 rounded-l-sm border-2 border-primary bg-primary text-white"
          >
            Фіз. особа
          </button>
          <button
            type="button"
            className="text-xs px-3 py-1.5 rounded-r-sm border-2 border-primary transition-all hover:bg-primary hover:text-white"
          >
            Юр. особа
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-52 gap-y-1 my-10">
          <div>
            <div className="flex flex-col md:flex-row md:gap-4">
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
            <div className="relative flex flex-col mb-1 md:mb-0 md:block">
              <Input
                id="company"
                type="company"
                label="Назва компанії, організації"
                value={formData.company}
                onChange={handleChange}
              />
              <button
                type="button"
                className="self-start md:absolute left-full top-7 -mt-3 md:mt-0 md:ml-4 text-sm text-blue-500 hover:text-blue-700 whitespace-nowrap transition-all"
              >
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
            <div className="flex flex-col md:flex-row md:gap-4">
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
        <HelpTypeSection />
        <PaymentSection />
        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="bg-linear-to-r from-red-500 to-accent text-white px-12 py-3 rounded-lg font-bold text-lg shadow-[0_4px_24px_0px_rgba(239,68,68,0.6)] hover:opacity-90 transition-all"
          >
            Допомогти
          </button>
        </div>
      </form>
    </>
  );
}
