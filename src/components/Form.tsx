import { useState, useRef, type ChangeEvent, type FormEvent } from "react";
import Input from "./Input";
import HelpTypeSection from "./HelpTypeSection";
import PaymentSection, { type PaymentSectionHandle } from "./PaymentSection";

type FormErrors = {
  [key: string]: string;
};

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
  const [errors, setErrors] = useState<FormErrors>({});
  const paymentRef = useRef<PaymentSectionHandle>(null);
  const personType = "individual";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;

    if (!formData.firstName.trim()) newErrors.firstName = "Введіть ім'я";
    if (!formData.lastName.trim()) newErrors.lastName = "Введіть прізвище";

    if (!formData.email.trim()) {
      newErrors.email = "Введіть Email";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Некоректний формат Email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Введіть номер телефону";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Некоректний номер";
    }

    if (!formData.country.trim()) newErrors.country = "Введіть країну";
    if (!formData.city.trim()) newErrors.city = "Введіть місто";
    if (!formData.address.trim()) newErrors.address = "Введіть адресу";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const isFormValid = validateForm();

    const isPaymentValid = paymentRef.current
      ? paymentRef.current.validate()
      : true;

    if (isFormValid && isPaymentValid) {
      const paymentData = paymentRef.current?.getData();

      const completeData = {
        ...formData,
        personType,
        payment: paymentData,
      };

      console.log("Дані валідні:", completeData);
    } else {
      console.log("Помилка валідації");
    }
  };

  return (
    <>
      <button
        className="absolute text-xl md:text-3xl top-5 right-1/8 md:right-1/6"
        aria-label="Закрити форму"
      >
        ✕
      </button>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center h-full bg-white mx-5 md:mx-52 my-12 py-12 px-6 md:px-16 shadow-md shadow-gray-500 rounded-xl"
      >
        <h1>Заповніть форму</h1>
        <div className="mt-5">
          <button
            type="button"
            aria-pressed={personType === "individual"}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-52 gap-y-1 my-10 w-full">
          <div>
            <div className="flex flex-col md:flex-row md:gap-4">
              <Input
                id="firstName"
                type="text"
                label="Ім'я"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <Input
                id="lastName"
                type="text"
                label="Фамілія"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
            </div>
            <div className="relative flex flex-col mb-1 md:mb-0 md:block">
              <Input
                id="company"
                type="text"
                label="Назва компанії, організації"
                value={formData.company}
                onChange={handleChange}
                error={errors.company}
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
              error={errors.email}
            />
            <Input
              id="phone"
              type="tel"
              label="Номер телефону"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
          </div>

          <div>
            <Input
              id="country"
              type="text"
              label="Країна"
              value={formData.country}
              onChange={handleChange}
              error={errors.country}
            />
            <div className="flex flex-col md:flex-row md:gap-4">
              <Input
                id="city"
                type="text"
                label="Місто"
                value={formData.city}
                onChange={handleChange}
                error={errors.city}
              />
              <Input
                id="state"
                type="text"
                label="Штат, район"
                value={formData.state}
                onChange={handleChange}
                error={errors.state}
              />
            </div>
            <Input
              id="address"
              type="text"
              label="Адреса"
              value={formData.address}
              onChange={handleChange}
              error={errors.address}
            />
            <Input
              id="zipCode"
              type="text"
              label="Поштовий індекс"
              value={formData.zipCode}
              onChange={handleChange}
              error={errors.zipCode}
            />
          </div>
        </div>

        <h1>Види допомоги</h1>
        <h3 className="mt-2 mb-5">Ви можете змінити вид допомоги</h3>

        <HelpTypeSection />

        <PaymentSection ref={paymentRef} />

        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="bg-linear-to-r from-red-500 to-accent text-white px-12 py-3 rounded-lg font-bold text-lg shadow-[0_4px_24px_0px_rgba(239,68,68,0.6)] hover:opacity-90 transition-all active:scale-95"
          >
            Допомогти
          </button>
        </div>
      </form>
    </>
  );
}
