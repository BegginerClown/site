import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function WorkshopsPage() {
  const workshops = [
    {
      id: 1,
      title: 'Гончарное дело',
      desc: 'Научитесь создавать уникальные изделия из глины на гончарном круге',
      duration: '3 часа',
      price: '3 500 ₽',
      level: 'Для начинающих',
    },
    {
      id: 2,
      title: 'Живопись маслом',
      desc: 'Основы работы с масляными красками и создание первой картины',
      duration: '4 часа',
      price: '4 000 ₽',
      level: 'Для всех уровней',
    },
    {
      id: 3,
      title: 'Текстильный дизайн',
      desc: 'Роспись по ткани, батик и создание авторских принтов',
      duration: '3.5 часа',
      price: '3 200 ₽',
      level: 'Для начинающих',
    },
    {
      id: 4,
      title: 'Керамическая скульптура',
      desc: 'Лепка фигурок и декоративных элементов из керамики',
      duration: '4 часа',
      price: '4 500 ₽',
      level: 'Средний уровень',
    },
    {
      id: 5,
      title: 'Акварельная живопись',
      desc: 'Техники работы с акварелью и создание пейзажей',
      duration: '3 часа',
      price: '3 000 ₽',
      level: 'Для начинающих',
    },
    {
      id: 6,
      title: 'Свечеварение',
      desc: 'Изготовление ароматических свечей из натуральных материалов',
      duration: '2.5 часа',
      price: '2 800 ₽',
      level: 'Для всех уровней',
    },
  ]

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
            Мастер-классы
          </motion.h1>
          <motion.p 
            className="font-inter font-light text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Выберите направление и запишитесь на занятие
          </motion.p>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div 
                key={workshop.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 bg-[#E8D5C4] flex items-center justify-center">
                  <span className="font-philosopher font-bold text-[#D4A574] text-6xl">{workshop.id}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-philosopher font-bold text-2xl mb-3">{workshop.title}</h3>
                  <p className="font-inter font-light text-gray-600 mb-4">{workshop.desc}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-inter font-light text-sm text-gray-500">{workshop.duration}</span>
                    <span className="font-philosopher font-normal text-[#D4A574]">{workshop.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-[#F5E6D3] text-gray-700 text-sm rounded-full font-inter font-light">
                      {workshop.level}
                    </span>
                    <Link to="/contacts" className="btn-primary text-sm py-2 px-6">
                      Записаться
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5E6D3]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Индивидуальные занятия</h2>
          <p className="subtitle">Возможны персональные мастер-классы в удобное для вас время</p>
          <Link to="/contacts" className="btn-primary inline-block">
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  )
}

export default WorkshopsPage
