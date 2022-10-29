const startTextUa = `
Цей бот завантажує відео чи відео-зображення з TikTok безпосередньо в Telegram.\nНапишіть /help, щоб переглянути додаткову інформацію.
`;

const helpTextUa = `
Є 3 способи використання:\n
1. Просто надішліть TikTok цьому боту, і він завантажить його для вас.
2. Додайте цього бота до будь-якої групи, щоб він обробляв усі надіслані посилання TikTok та надсилав їх у відповідь.
3. Використовуйте вбудований запит (наприклад, @attdl_bot url)\n
Для TikTok із зображеннями присутня 1 хвилина затримки надсилання через обмеження Telegram.
У приватному чаті з ботом затримка всього 3 секунди.
Крім того, якщо зображень багато вбудований запит може запрацювати лише після того як ви надіслали TikTok до будь-якого чату, який було оброблено ботом.
`;

exports.startTextUa = startTextUa;
exports.helpTextUa = helpTextUa;