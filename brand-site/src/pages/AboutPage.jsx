import { motion } from 'framer-motion'

function AboutPage() {
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
            О бренде
          </motion.h1>
          <motion.p 
            className="font-inter font-light text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            История создания и философия нашей творческой мастерской
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Наша история</h2>
            <div className="space-y-6 font-inter font-light text-gray-700 text-lg leading-relaxed">
              <p>
                Лаборатория Уюта была основана в 2020 году группой единомышленников, объединённых любовью к творчеству и желанием делиться своими знаниями с другими.
              </p>
              <p>
                Мы верим, что каждый человек способен создавать красоту своими руками. Наша миссия — помочь раскрыть творческий потенциал и найти своё уникальное выражение в искусстве.
              </p>
              <p>
                За годы работы мы провели более 500 мастер-классов и обучили свыше 3000 учеников различных возрастов и уровней подготовки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F5E6D3]">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Качество', desc: 'Внимательно следим за каждым аспектом наших занятий' },
              { num: '02', title: 'Творчество', desc: 'Поощряем эксперименты и поиск собственного стиля' },
              { num: '03', title: 'Сообщество', desc: 'Создаём пространство для общения единомышленников' },
              { num: '04', title: 'Развитие', desc: 'Постоянно совершенствуем программы и методики' },
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="font-philosopher font-normal text-4xl text-[#D4A574] block mb-4">{value.num}</span>
                <h3 className="font-philosopher font-bold text-xl mb-3">{value.title}</h3>
                <p className="font-inter font-light text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Команда мастеров</h2>
          <p className="subtitle">Профессионалы, которые помогут вам раскрыть талант</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Анна Петрова', role: 'Основатель, художник по текстилю' },
              { name: 'Михаил Сидоров', role: 'Мастер гончарного дела' },
              { name: 'Елена Козлова', role: 'Преподаватель живописи' },
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-32 h-32 bg-[#E8D5C4] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="font-philosopher font-bold text-[#D4A574] text-3xl">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-philosopher font-bold text-xl mb-2">{member.name}</h3>
                <p className="font-inter font-light text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
