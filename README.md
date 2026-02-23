# Frontend Course Presentations

Презентації до курсу «Frontend-розробка» (НТУ «ХПІ», кафедра ІКМ)

## Структура

```
├── src/
│   ├── lecture-01/
│   │   ├── index.md      # Контент лекції
│   │   └── assets/       # Зображення, файли
│   └── lecture-02/
├── css/
│   └── theme.css         # Кастомна тема Reveal.js
├── scripts/
│   └── run.js            # Скрипт запуску
├── dist/                 # Експортовані HTML
├── COURSE_PLAN.md        # План курсу
└── package.json
```

## Використання

### Режим розробки (live reload)

```bash
npm run dev                  # lecture-01 за замовчуванням
npm run dev -- lecture-02    # вказати іншу лекцію
```

Презентація: http://localhost:1950

### Перегляд без live reload

```bash
npm run start -- lecture-01
```

### Експорт в HTML

```bash
npm run export -- lecture-01
```

## Кастомна тема

Тема знаходиться в `css/theme.css` — повноцінний CSS файл без SCSS і build-step.

Підключається в frontmatter кожної лекції:

```yaml
---
title: Назва лекції
separator: <!--s-->
verticalSeparator: <!--v-->
theme: css/theme.css
highlightTheme: github
---
```

> **Важливо:** `reveal-md` роздає файли проекту через `/_assets/`. Тому шлях у frontmatter — відносно кореня проекту (`css/theme.css`), не відносно файлу лекції.

Для редагування стилів змінюй CSS-змінні в `:root` на початку `css/theme.css`.

## Нотатки спікера

`<aside class="notes">` — працює в режимі спікера (клавіша `S`)

## Титульний слайд

```html
<div class="title-slide">
  <h1>Назва лекції</h1>
  <div class="lecture-number">Лекція N</div>
  <div class="slide-footer">
    <div class="lecturer">Викладачі: ПІБ</div>
    <div class="department">НТУ «ХПІ» | Кафедра ІКМ</div>
  </div>
</div>
```

## Створення нової лекції

```bash
mkdir src/lecture-XX/assets
```

Створіть `src/lecture-XX/index.md`, скопіювавши frontmatter з існуючої лекції.

Зображення додавайте в папку `assets/`, посилайтесь так: `assets/image.png`

## Клавіші Reveal.js

| Key | Дія |
|-----|-----|
| `Space` | Наступний слайд |
| `S` | Speaker view |
| `Esc` | Огляд |
| `F` | Fullscreen |
