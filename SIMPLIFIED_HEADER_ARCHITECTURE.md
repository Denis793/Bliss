# Спрощений Header компонент з Mobile-First підходом

## Зміни в архітектурі:

### 1. Розділення на окремі компоненти:

- **Logo** - логотип з адаптивним розміром
- **NavLink** - навігаційні посилання з ефектами hover
- **MobileMenu** - мобільне меню з гамбургер-кнопкою
- **useHeaderScroll** - хук для відстеження скролу

### 2. Спрощена структура стилів:

#### Header.module.scss - основні стилі:

```scss
.header - основний контейнер header
.headerScrolled - стан при скролі
.navbar - навігаційна панель
.menuBarDesktop - десктопне меню (приховане на мобільних)
.navbarNavDesktop - список навігації для десктопу
```

#### Mobile-first підхід:

- За замовчуванням показується тільки Logo та кнопка меню
- На `$breakpoint-m` (840px) показується десктопне меню
- Кнопка меню приховується на десктопі

### 3. Компоненти:

#### NavLink:

```jsx
<NavLink href="#section" isActive={true} onClick={handler}>
  Link Text
</NavLink>
```

#### Logo:

```jsx
<Logo href="#home" />
```

#### MobileMenu:

```jsx
<MobileMenu isMenuOpen={isOpen} toggleMenu={toggle} closeMenu={close} menuItems={items} />
```

### 4. Використані CSS змінні з проекту:

#### Spacing:

- `--spacing-m` - padding навігації
- `--spacing-s` - padding посилань
- `--spacing-l` - gap між елементами
- `--spacing-2xl` - padding мобільного меню

#### Typography:

- `--fs-nav-laptop` - розмір шрифту для планшету/лаптопу
- `--fs-nav-desktop` - розмір шрифту для десктопу
- `--fs-nav-mobile` - розмір шрифту для мобільних
- `--fw-medium` - вага шрифту

#### Colors:

- `--text-color-default` - основний колір тексту
- `--primary-color` - акцентний колір
- `--burger-color` - колір гамбургер-кнопки
- `--bg-header` - фон header при скролі
- `--bg-page` - фон сторінки для мобільного меню
- `--border-color` - колір рамки

#### Effects:

- `--transition-fast` - швидкі переходи
- `--shadow-main` - тінь
- `--radius-s` - радіус заокруглення

#### Z-index:

- `--z-header` - z-index для header
- `--z-index-mobileMenu` - z-index для мобільного меню

### 5. Переваги нової архітектури:

1. **Модульність** - кожен компонент має свою відповідальність
2. **Reusability** - NavLink та Logo можна використовувати в інших місцях
3. **Mobile-first** - спочатку мобільна версія, потім desktop
4. **Менше коду** - простіша логіка та стилі
5. **Кращий maintainability** - легше вносити зміни
6. **Консистентність** - використання системи CSS змінних

### 6. Responsive breakpoints:

- **Mobile**: до 840px - показується тільки Logo та гамбургер-кнопка
- **Desktop**: від 840px - показується повне десктопне меню

### 7. Анімації:

- Smooth scroll до секцій
- Анімація гамбургер-кнопки (відкриття/закриття)
- Slide-in анімація мобільного меню
- Hover ефекти на посиланнях з underline анімацією

Такий підхід забезпечує чистий, maintainable код з правильною архітектурою та оптимальним UX на всіх пристроях.
