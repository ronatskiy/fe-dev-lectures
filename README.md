# Frontend Course Presentations

Презентації до курсу «Frontend-розробка» (НТУ «ХПІ», кафедра ІКМ)

## Структура

```
├── slides/
│   ├── lecture-01/
│   │   ├── lecture-01.md  # Контент лекції
│   │   └── assets/        # Зображення, файли
│   └── lecture-02/
├── css/
│   └── theme.css          # Кастомна тема Reveal.js
├── scripts/
│   └── run.js             # Скрипт-ранер (обробляє шляхи)
├── pdf/                   # Згенеровані PDF файли
├── dist/                  # Експортовані HTML (статичний сайт)
├── COURSE_PLAN.md         # План курсу
└── package.json
```

## Використання

Всі команди приймають назву папки лекції як аргумент.

### Режим розробки (live reload)

```bash
npm run dev -- lecture-01    # з авто-відкриттям браузера
npm run start -- lecture-01  # без авто-відкриття
```

Презентація: http://localhost:1950

### Генерація PDF

```bash
npm run print -- lecture-01
```

Файл буде збережено в папку `pdf/`. Потребує встановленого `puppeteer`.

### Експорт в статичний HTML

```bash
npm run export -- lecture-01
```

Результат у папці `dist/`.

## Кастомна тема

Тема знаходиться в `css/theme.css`. Вона підключається автоматично скріптом `run.js` через прапорець `--theme`.

Для редагування стилів змінюй CSS-змінні в `:root` на початку `css/theme.css`.

## Нотатки спікера

`<aside class="notes">` — працює в режимі спікера (клавіша `S`). Важливо тримати порожній рядок після тега для коректного рендеру Markdown.

## Титульний слайд

Кожна лекція починається з HTML-блоку:

```html
<div class="title-slide">
  <h1>Назва лекції</h1>
  <div class="discipline">Назва дисципліни</div>
  <div class="lecture-number">Лекція N</div>
  <div class="lecturers-card">
    <span class="lecturer-name">Ім'я Викладача</span>
  </div>
</div>
```

## Створення нової лекції

1. Створіть папку `slides/lecture-XX/`.
2. Створіть у ній `lecture-XX.md`.
3. Скопіюйте frontmatter та титульний слайд з існуючих лекцій.

## Клавіші Reveal.js

| Key | Дія |
|-----|-----|
| `Space` | Наступний слайд |
| `S` | Speaker view |
| `Esc` | Огляд (Overview) |
| `F` | Fullscreen |
| `?` | Довідка по клавішах |
