import { motion } from 'framer-motion'
import { useState } from 'react'

function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C4]">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="font-philosopher font-bold text-5xl md:text-6xl mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Контакты
          </motion.h1>
          <motion.p 
            className="font-inter font-light text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Свяжитесь с нами любым удобным способом
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-philosopher font-bold text-3xl mb-8">Контактная информация</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-philosopher font-bold text-xl mb-2">Адрес</h3>
                  <p className="font-inter font-light text-gray-600">г. Москва, ул. Творческая, д. 15</p>
                </div>

                <div>
                  <h3 className="font-philosopher font-bold text-xl mb-2">Телефон</h3>
                  <p className="font-inter font-light text-gray-600">+7 (999) 123-45-67</p>
                </div>

                <div>
                  <h3 className="font-philosopher font-bold text-xl mb-2">Email</h3>
                  <p className="font-inter font-light text-gray-600">info@lab-uyut.ru</p>
                </div>

                <div>
                  <h3 className="font-philosopher font-bold text-xl mb-2">Режим работы</h3>
                  <p className="font-inter font-light text-gray-600">Пн-Пт: 10:00 - 21:00</p>
                  <p className="font-inter font-light text-gray-600">Сб-Вс: 11:00 - 20:00</p>
                </div>

                <div>
                  <h3 className="font-philosopher font-bold text-xl mb-2">Социальные сети</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-[#D4A574] rounded-full flex items-center justify-center text-white hover:bg-[#C49564] transition-colors">
                      VK
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#D4A574] rounded-full flex items-center justify-center text-white hover:bg-[#C49564] transition-colors">
                      TG
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#D4A574] rounded-full flex items-center justify-center text-white hover:bg-[#C49564] transition-colors">
                      WA
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-philosopher font-bold text-3xl mb-8">Напишите нам</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-philosopher font-normal text-gray-700 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A574] font-inter font-light"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label className="block font-philosopher font-normal text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A574] font-inter font-light"
                    placeholder="example@mail.ru"
                  />
                </div>

                <div>
                  <label className="block font-philosopher font-normal text-gray-700 mb-2">Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A574] font-inter font-light"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block font-philosopher font-normal text-gray-700 mb-2">Сообщение</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A574] font-inter font-light resize-none"
                    placeholder="Ваш вопрос или пожелание..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Отправить
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#F5E6D3]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Как нас найти</h2>
          <div className="mt-8 h-96 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <p className="font-inter font-light text-gray-500">Здесь будет интерактивная карта</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactsPage
