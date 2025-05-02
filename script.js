// Данные всех маршрутов
const routesData = {
    6: {
        title: "Маршрут №6 - МОНОЛИТ",
        description: "Вокзал - Б/у рынок - ТТУ - ГУВД Приволжск - Таксопарк - Банк - Завод ЖБК",
        scheme: "images/route-6-map.png",
        stops: [
            "Вокзал (конечная)",
            "Б/у рынок (по требованию)",
            "ТТУ (обязательная)",
            "ГУВД Приволжск (обязательная)",
            "Таксопарк (по требованию)",
            "Банк (обязательная)",
            "Завод ЖБК (конечная)"
        ],
        notice: `
            <strong>Примечание:</strong><br>
            - Остановки по требованию - предупреждайте водителя заранее<br>
            - В утренние часы (6:00-8:00) интервал сокращается до 10 минут
        `,
        buses: [
            "Ikarus 260",
            "MB Sprinter Classic 411 CDI",
            "Scania Omnilink CK95UB",
            "Богдан А092",
            "Богдан А09302",
            "Богдан А09304 «Атаман»",
            "ГАЗель Next A64R42 «Ситилайн»",
            "ЛАЗ-695Н",
            "ЛиАЗ-4292",
            "ЛиАЗ-5256.00 '1994",
            "ЛиАЗ-5256.00 '2000",
            "ЛиАЗ-5256.00-11",
            "ЛиАЗ-5256.40",
            "ЛиАЗ-5292.22",
            "ЛиАЗ-677М",
            "МАЗ-203",
            "ПАЗ-672",
            "ПАЗ-320405-04 «Вектор Next»",
            "ПАЗ-320414-05 «Вектор»",
            "ПАЗ-32053 '2005",
            "ПАЗ-32054 '2005",
            "ПАЗ-32054-07 '2007",
            "ПАЗ-32053 Рестайлинг",
            "ПАЗ-32054 Рестайлинг",
            "ПАЗ-4230 «Аврора»",
            "ПАЗ-4234"
        ],
        interval: "15-20 минут (10 минут в часы пик)",
        time: "6:00 - 23:00",
        additionalInfo: "Завод к автошколе — осуществляется по требованию! Добро не лежит на дороге, его случайно не подберешь. Добру человек у человека учится."
    },
    104: {
        title: "Маршрут №104 - ПРИБОЛЖЕК",
        description: "ЖТУ - ЖД Вокзал г.Приволжск - ТК/автостоянка - Таксопарк - Банк - Завод ЖБК",
        scheme: "images/route-104-map.png",
        stops: [
            "ЖТУ (конечная)",
            "ЖД Вокзал г.Приволжск (контрольная)",
            "ТК/автостоянка (по требованию)",
            "Таксопарк (по требованию)",
            "Банк (обязательная)",
            "Завод ЖБК (конечная)"
        ],
        notice: `
            <strong>Особенности:</strong><br>
            - Контрольная остановка у ЖД вокзала - обязательная проверка документов<br>
            - Рекомендованное время для совершения кругового заезда - не более 20 минут
        `,
        buses: [
            "Ikarus 256",
            "Ikarus 260",
            "MB Sprinter Classic 411 CDI",
            "Scania Omnilink CK95UB",
            "Богдан А092",
            "Богдан А09302",
            "Богдан А09304 «Атаман»",
            "ГАЗель Next A64R42 «Ситилайн»",
            "КАвЗ-4238 «Аврора»",
            "ЛАЗ-4207",
            "ЛАЗ-695Н",
            "ЛАЗ-697Р «Турист»",
            "ЛАЗ-699Р «Турист»",
            "ЛиАЗ-4292",
            "ЛиАЗ-5256.00 '1994",
            "ЛиАЗ-5256.00 '2000",
            "ЛиАЗ-5256.00-11",
            "ЛиАЗ-5256.40",
            "ЛиАЗ-5292.22",
            "ЛиАЗ-677М",
            "МАЗ-203",
            "ПАЗ-672",
            "ПАЗ-320405-04 «Вектор Next»",
            "ПАЗ-320414-05 «Вектор»",
            "ПАЗ-32053 '2005",
            "ПАЗ-32054 '2005",
            "ПАЗ-32054-07 '2007",
            "ПАЗ-32053 Рестайлинг",
            "ПАЗ-32054 Рестайлинг",
            "ПАЗ-4230 «Аврора»",
            "ПАЗ-4234"
        ],
        interval: "20 минут",
        time: "5:30 - 22:30",
        specialInstructions: [
            "Разворот у ЖД вокзала требует уведомления других водителей",
            "ТК/автостоянка и Таксопарк - остановки по требованию",
            "Ограничение времени на круговой заезд - 20 минут"
        ]
    },
    529: {
        title: "Маршрут №529 - МОНОЛИТ",
        description: "ЖД Вокзал г.Приволжск - Шахта - ОКБ г.Мирный - Автошкола - Автостоянка - АТП - Банк - ЖД Вокзал г.Мирный",
        scheme: "images/route-529-map.png",
        stops: [
            "ЖД Вокзал г.Приволжск (конечная)",
            "Шахта (обязательная)",
            "ОКБ г.Мирный (контрольная)",
            "Автошкола (по требованию)",
            "Автостоянка (по требованию)",
            "АТП (обязательная)",
            "Банк (обязательная)",
            "ЖД Вокзал г.Мирный (конечная)"
        ],
        notice: `
            <strong>Важно:</strong><br>
            - На контрольной остановке ОКБ г.Мирный требуется спецпропуск<br>
            - Иметь при себе документы на всем протяжении маршрута
        `,
        buses: [
            "Ikarus 256",
            "Ikarus 250",
            "MB Sprinter Classic 411 CDI",
            "Scania Omnilink CK95UB",
            "Богдан А092",
            "Богдан А09302",
            "Богдан А09304 «Атаман»",
            "КАвЗ-4238 «Аврора»",
            "ЛАЗ-4207",
            "ЛАЗ-5207",
            "ЛАЗ-697Р «Турист»",
            "ЛАЗ-699Р «Турист»",
            "ЛиАЗ-5256.00-11",
            "ЛиАЗ-677М",
            "ПАЗ-320405-04 «Вектор Next»",
            "ПАЗ-320414-05 «Вектор»",
            "ПАЗ-32053 '2005",
            "ПАЗ-32054 '2005",
            "ПАЗ-32054-07 '2007",
            "ПАЗ-32053 Рестайлинг",
            "ПАЗ-32054 Рестайлинг",
            "ПАЗ-4230 «Аврора»",
            "ПАЗ-4234"
        ],
        interval: "30 минут",
        time: "5:00 - 24:00 (из Приволжска до 23:30)",
        specialInstructions: [
            "Обязателен пропуск на участке Приволжск-Мирный",
            "ОКБ, Шахта, АТП - обязательные остановки",
            "Автошкола и автостоянка - по требованию",
            "Последний рейс из Приволжска в 23:30"
        ],
        industrialRoute: true
    }
};

// Функция для отображения деталей маршрута
function showRouteDetails(routeId) {
    const route = routesData[routeId];
    const routeCard = document.querySelector(`.route-card[onclick="showRouteDetails(${routeId})"]`);
    const routeImage = routeCard.getAttribute('data-route-image');

    if (!route) return;

    const modalContent = `
        <div class="route-details">
            <h2>${route.title}</h2>
            <p class="route-operator">Оператор: <strong>ООО "Монолит"</strong></p>
            <p><strong>Описание:</strong> ${route.description}</p>
            <p><strong>Интервал движения:</strong> ${route.interval}</p>
            <p><strong>Время работы:</strong> ${route.time}</p>
            
            ${route.industrialRoute ? `
            <div class="industrial-notice">
                <h4>Промышленный маршрут</h4>
                <p>Данный маршрут проходит через промышленную зону с особыми условиями движения</p>
            </div>
            ` : ''}
            
            ${route.specialInstructions ? `
            <div class="special-instructions">
                <h4>Особые инструкции:</h4>
                <ul>
                    ${route.specialInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            
            <h3>Схема движения</h3>
            <div class="route-map-container">
                <img src="${routeImage}" alt="Схема маршрута ${routeId}" class="route-map-image">
            </div>
            
            <h3>Остановки</h3>
            <ul class="route-stops">
                ${route.stops.map(stop => `
                    <li class="${
                        ['ОКБ', 'шахта', 'АТП'].some(s => stop.includes(s)) ? 'industrial-stop' : 
                        ['Автошкола', 'Автостоянка', 'Таксопарк', 'Б/у рынок'].some(s => stop.includes(s)) ? 'hazard-stop' : ''
                    }">${stop}</li>
                `).join('')}
            </ul>
            
            <div class="route-notice">
                ${route.notice}
                ${route.additionalInfo ? `<p class="additional-info">${route.additionalInfo}</p>` : ''}
            </div>
            
            <h3>Подвижной состав (${route.buses.length} моделей)</h3>
            <div class="route-buses-grid">
                ${route.buses.map(bus => `
                    <div class="bus-model">
                        <div class="bus-icon">${bus.includes('Турист') ? '🚍' : '🚌'}</div>
                        <div class="bus-name">${bus}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.getElementById('modalContent').innerHTML = modalContent;
    document.getElementById('routeModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Функция для закрытия модального окна
function closeModal() {
    document.getElementById('routeModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('routeModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Можно добавить дополнительную инициализацию при необходимости
});