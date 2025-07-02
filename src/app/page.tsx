import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', date: '', message: '', photo: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами.');
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Прайс Декор</h1>
      <p className="mb-6 text-center text-gray-600">Покраска и поклейка обоев. Работаем в Манхэттене, Бруклине и Квинсе.</p>

      <ul className="mb-6 list-disc list-inside">
        <li>Покраска стен и потолков</li>
        <li>Поклейка обоев</li>
        <li>Демонтаж обоев</li>
        <li>Подготовка стен</li>
        <li>Наружная покраска</li>
      </ul>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-xl shadow-md">
        <Input name="name" placeholder="Имя" onChange={handleChange} required />
        <Input name="phone" placeholder="Телефон" onChange={handleChange} required />
        <Input name="email" placeholder="Email" onChange={handleChange} />
        <Input name="address" placeholder="Адрес" onChange={handleChange} />
        <Input name="date" type="date" onChange={handleChange} required />
        <Textarea name="message" placeholder="Опишите задачу" onChange={handleChange} required />
        <Input name="photo" type="file" accept="image/*" onChange={handleChange} />
        <Button type="submit">Отправить заявку</Button>
      </form>
    </main>
  );
}
