// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Показываем экран приветствия
    showWelcomeScreen();
    
    // Устанавливаем обработчики событий
    setupEventListeners();
});

// Показ экрана приветствия
function showWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainScreen = document.getElementById('mainScreen');
    
    // Показываем приветствие на 3 секунды
    setTimeout(() => {
        // Анимация исчезновения
        welcomeScreen.style.animation = 'fadeOut 1s ease forwards';
        
        // После завершения анимации скрываем приветствие и показываем главный экран
        setTimeout(() => {
            welcomeScreen.classList.remove('active');
            welcomeScreen.style.display = 'none';
            
            mainScreen.classList.add('active');
            mainScreen.style.display = 'flex';
        }, 1000);
    }, 3000); // 3 секунды приветствие
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Кнопка "Прайс"
    const priceBtn = document.getElementById('priceBtn');
    if (priceBtn) {
        priceBtn.addEventListener('click', showPriceScreen);
    }
    
    // Кнопка "Проект"
    const projectBtn = document.getElementById('projectBtn');
    if (projectBtn) {
        projectBtn.addEventListener('click', () => {
            window.open('https://t.me/+QwFLL0inhSI0MDcy', '_blank');
        });
    }
    
    // Кнопка "Связь со мной"
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            window.open('http://t.me/ocewej', '_blank');
        });
    }
    
    // Кнопка "Назад" на экране прайса
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', showMainScreen);
    }
}

// Показать экран с прайсом
function showPriceScreen() {
    const mainScreen = document.getElementById('mainScreen');
    const priceScreen = document.getElementById('priceScreen');
    
    // Скрываем главный экран
    mainScreen.classList.remove('active');
    mainScreen.style.display = 'none';
    
    // Показываем экран с прайсом
    priceScreen.classList.add('active');
    priceScreen.style.display = 'block';
}

// Показать главный экран
function showMainScreen() {
    const mainScreen = document.getElementById('mainScreen');
    const priceScreen = document.getElementById('priceScreen');
    
    // Скрываем экран с прайсом
    priceScreen.classList.remove('active');
    priceScreen.style.display = 'none';
    
    // Показываем главный экран
    mainScreen.classList.add('active');
    mainScreen.style.display = 'flex';
}

// Добавляем анимацию при наведении на кнопки
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Анимация появления элементов при прокрутке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Наблюдаем за элементами с анимацией
    document.querySelectorAll('.feature-card, .price-item, .service-details').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
