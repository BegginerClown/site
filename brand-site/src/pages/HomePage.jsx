import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C4]">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="font-philosopher font-bold text-5xl md:text-7xl mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Лаборатория Уюта
          </motion.h1>
          <motion.p 
            className="font-inter font-light text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Творческая мастерская, где рождаются идеи и создаются уникальные вещи своими руками
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/workshops" className="btn-primary inline-block">
              Смотреть мастер-классы
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Опытные мастера', desc: 'Наши преподаватели — практикующие художники с многолетним стажем' },
              { title: 'Уютная атмосфера', desc: 'Комфортные студии в центре города со всем необходимым оборудованием' },
              { title: 'Индивидуальный подход', desc: 'Маленькие группы до 8 человек для максимального внимания каждому' },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-philosopher font-bold text-white text-2xl">{index + 1}</span>
                </div>
                <h3 className="font-philosopher font-bold text-xl mb-3">{feature.title}</h3>
                <p className="font-inter font-light text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5E6D3]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Присоединяйтесь к нам</h2>
          <p className="subtitle">Первое занятие со скидкой 20%</p>
          <Link to="/contacts" className="btn-primary inline-block">
            Записаться на занятие
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
