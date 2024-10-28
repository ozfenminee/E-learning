import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError('Geçerli bir e-posta adresi giriniz.');
      return;
    }

    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setError(''); 
  };

  return (
    <>
      <Navbar />
      <div>
        <section className="flex justify-center items-center min-h-screen bg-yellow-100 py-10">
          <div className="w-full max-w-4xl bg-yellow-300 shadow-xl rounded-lg p-12 md:p-16 lg:p-20">
            <h1 className="text-4xl font-bold text-red-800 text-center mb-10">
              Sorularınızı formu doldurarak bize iletebilirsiniz...
            </h1>
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">İletişim</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2">İsim</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 text-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2">E-posta</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 text-lg"
                  required
                />
                {error && <p className="text-red-600 mt-2">{error}</p>}
              </div>
              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2">Mesaj</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 text-lg"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-lg"
              >
                Gönder
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactForm;
