import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#D4A574] rounded-full flex items-center justify-center">
                <span className="font-philosopher font-bold text-white text-lg">Л</span>
              </div>
              <span className="font-philosopher font-bold text-xl">Лаборатория Уюта</span>
            </div>
            <p className="font-inter font-light text-gray-400">
              Творческая мастерская для создания уюта и красоты своими руками
            </p>
          </div>

          <div>
            <h3 className="font-philosopher font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="font-inter font-light text-gray-400 hover:text-[#D4A574] transition-colors">Главная</Link></li>
              <li><Link to="/about" className="font-inter font-light text-gray-400 hover:text-[#D4A574] transition-colors">О бренде</Link></li>
              <li><Link to="/workshops" className="font-inter font-light text-gray-400 hover:text-[#D4A574] transition-colors">Мастер-классы</Link></li>
              <li><Link to="/contacts" className="font-inter font-light text-gray-400 hover:text-[#D4A574] transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-philosopher font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 font-inter font-light text-gray-400">
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Email: info@lab-uyut.ru</li>
              <li>Адрес: г. Москва, ул. Творческая, д. 15</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-inter font-light text-gray-400">
            © 2024 Лаборатория Уюта. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
