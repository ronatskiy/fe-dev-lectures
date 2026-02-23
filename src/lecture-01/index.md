---
title: Інструментарій Frontend-розробника
separator: <!--s-->
verticalSeparator: <!--v-->
theme: css/theme.css
highlightTheme: github
---

<div class="title-slide">
  <h1>Інструментарій Frontend-розробника</h1>
  <div class="lecture-number">Лекція 1</div>
  <div class="slide-footer">
    <div class="lecturer">Викладачі: Місюра С.Ю., Онацький Р.Л.</div>
    <div class="department">НТУ «ХПІ» | Кафедра ІКМ</div>
  </div>
</div>

<aside class="notes">
Вступ до курсу. 

Представлюся, розкажу про формат занять. 

Курс розрахований на студентів 2-3 курсу, які вже мають базові знання програмування.

Ми будемо йти від основ до сучасних фреймворків (React).
Фокус — на практику, тому буде багато коду.
</aside>

<!--s-->

## Викладачі

- **Місюра С.Ю.**
- **Онацький Р.Л.**

Кафедра комп'ютерного моделювання  
НТУ «ХПІ»

<aside class="notes">
Представлю себе та колегу. Розкажу, що кафедра ІКМ спеціалізується на 
комп'ютерному моделюванні, і веб-розробка — один з найпопулярніших напрямків.
Курс створений, щоб ви могли після навчання одразу працювати Junior Frontend розробником.
</aside>

<!--v-->

## Що таке Frontend?

Це все, що бачить користувач:

- **HTML** — структура
- **CSS** — стиль
- **JavaScript** — поведінка

Frontend ≠ дизайн (Figma, Photoshop)  
Frontend ≠ Backend (API, бази даних)

<aside class="notes">
Поясню тріаду: HTML — це кістяк, CSS — шкіра, JavaScript — м'язи.
Підкреслю, що frontend — це не дизайн (дизайнери працюють у Figma),
і не backend (серверна логіка). Це міст між ними.
Розкажу приклад: коли ви відкриваєте Facebook — все, що бачите, це frontend.
</aside>

<!--s-->

## Frontend vs Backend

| Frontend | Backend |
|----------|---------|
| Клієнт (браузер) | Сервер |
| UI/UX | Бізнес-логіка |
| HTML, CSS, JS | Node.js, Python, Go... |
| 150ms на реакцію | 50ms на запит |

**Взаємодія:** Browser → HTTP Request → API → Database → Response → Render

<aside class="notes">
Важливо зрозуміти різницю. Frontend працює в браузері користувача, 
backend — на сервері. Вони спілкуються через HTTP.
Наведу аналогію: frontend — це офіціант, backend — кухня.
Офіціант приймає замовлення (UI), відносить на кухню (API), приносить їжу (response).
</aside>

<!--s-->

## Браузери та DevTools

Основні браузери:
- Chrome (DevTools — стандарт)
- Firefox (DevTools, Inspector)
- Safari (Web Inspector)

<!--v-->

![alt text](assets/image.png)

<!--v-->
**DevTools = power_user режим:**
- Elements / Inspector
- Console
- Network
- Application / Storage

<aside class="notes">
Без браузера немає вебу. Рекомендую Chrome як основний — найкращі DevTools.
Покажу, як відкрити DevTools: F12 або Ctrl+Shift+I.
Розкажу про кожну вкладку: Elements (DOM), Console (логи), Network (мережа).
Це інструменти, якими ви користуватиметесь щодня.
</aside>

<!--s-->

## Редактори коду

| Редактор | Особливості |
|----------|-------------|
| **VS Code** | Стандарт індустрії, безкоштовний |
| WebStorm | Найпотужніший, платний |
| Sublime Text | Швидкий, легкий |
| Atom | Мертвий проєкт |

**Ми використовуємо VS Code** — найкраща екосистема плагінів

<aside class="notes">
VS Code — безкоштовний, від Microsoft, з відкритим кодом.
Має найбільшу екосистему плагінів.
WebStorm — платний, для тих, хто хоче "все з коробки".
Sublime — швидкий, але старіє.
Atom — мертвий, не встановлюйте.
Підкреслю: інструмент не робить вас кращим розробником, але VS Code — стандарт.
</aside>

<!--s-->

## VS Code: Обов'язкові плагіни

```bash
# Плагіни, які потрібно встановити:

- ESLint      # Перевірка JS
- Prettier    # Форматування коду
- Live Server # Локальний сервер
- Auto Rename Tag
- HTML CSS Support
- GitLens     # Git інтеграція
```

<aside class="notes">
Ці плагіни — мінімум, який потрібен кожному:
ESLint — лінтер, показує помилки в коді
Prettier — форматує код автоматично
Live Server — запускає локальний сервер з hot reload
Покажу встановлення плагінів прямо з інтерфейсу VS Code.
</aside>

<!--s-->

## Emmet: Прискорювач

Emmet дозволяє писати HTML в 10 разів швидше:

```html
div.container>ul.list>li.item*3
```

Результат:
```html
<div class="container">
  <ul class="list">
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
  </ul>
</div>
```

Doc: [emmet.io](https://emmet.io)

<aside class="notes">
Emmet — найкрутіша фішка для верстальника. Пишете скорочення, натискаєте Tab — і готовий код.
Покажу приклади в реальному часі. Це як Excel формули, тільки для HTML.
Документація на emmet.io — збережіть собі.
Практика показує: той, хто знає Emmet, верстає в 5-10 разів швидше.
</aside>

<!--s-->

## Клавіатурні скорочення (VS Code)

| Комбінація | Дія |
|------------|-----|
| `Ctrl+Shift+P` | Command Palette |
| `Ctrl+D` | Вибрати наступне входження |
| `Alt+Click` | Мультикурсор |
| `Ctrl+/` | Закоментувати |
| `Ctrl+Shift+L` | Вибрати всі входження |
| `F1` | Те саме, що Ctrl+Shift+P |

<aside class="notes">
Розробник, який не знає клавіатурних скорочень — повільний розробник.
Найважливіші: Command Palette (Ctrl+Shift+P) — відкриває все.
Ctrl+D — виділити наступне слово, повторити — і редагуєте всі входження.
Alt+Click — мультикурсор (коли треба редагувати кілька рядків одночасно).
Рекомендую роздрукувати шпаргалку і повісити біля монітора.
</aside>

<!--s-->

## Git та GitHub

**Git** — система контролю версій  
**GitHub** — хостинг Git-репозиторіїв

```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/user/repo.git
git push -u origin main
```

Потрібно кожному розробнику!

<aside class="notes">
Git — це як "часова машина" для коду. Можна повернутися до будь-якої версії.
GitHub — місце, де зберігають код і працюють командою.
Кожен сучасний розробник має знати Git. Розкажу основні команди.
Домашнє завдання: зареєструватися на GitHub і пройти інтерактивний туторіал.
Це займе 15 хвилин, але дасть базу на весь курс.
</aside>

<!--s-->

## Домашнє завдання

1. Встановити VS Code
2. Встановити плагіни (ESLint, Prettier, Live Server)
3. Зареєструватися на GitHub
4. Пройти інтерактив Git: [try.github.io](https://try.github.io)

**Наступна тема:** HTML5 — семантична верстка
