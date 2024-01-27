# Используйте официальный образ node
FROM node:latest

# Установите рабочую директорию в контейнере
WORKDIR /app

# Копируйте package.json и package-lock.json (если есть)
COPY ./frontend/main_app/package*.json ./

# Установите зависимости
RUN npm install

# Копируйте исходный код приложения в контейнер
COPY ./frontend/main_app/ .

# Строим приложение для продакшена
RUN npm run build

# Устанавливаем простой HTTP-сервер для обслуживания статического контента
RUN npm install -g serve

# Запускаем сервер
CMD ["serve", "-s", "build", "-l", "3000"]
