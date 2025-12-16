import { useState, type ChangeEvent } from "react";
import Input from "./Input";

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
      <button className="fixed text-3xl top-1 right-70">✕</button>

      <div className="flex flex-col items-center my-12 h-full bg-white mx-10 md:mx-68 py-8 px-14 shadow-md shadow-gray-500 rounded-lg">
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
      </div>
    </>
  );
}
