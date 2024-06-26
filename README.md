Описание техническое задание на позицию Frontend разработчика

Тестовое задание заключается в верстке одной страницы SPA вымышленного приложения. Используйте дизайн в Figma, все нужные элементы есть там: изображения, фоны, логотипы, формы кнопок, цвета и шрифты.

https://www.figma.com/file/to5Dx1SQ500R8bhWGrVMul/TEST?type=design&node-id=84-26&mode=design&t=m1bLzEvemiML6mMC-0

Стандартный уровень: Адаптивная верстка всех элементов страницы с использованием препроцессора SASS.
Средний уровень: Адаптивная верстка с использованием препроцессора SASS, реализация интерактивных элементов при наведении, реализация логики бургер-меню для мобильных устройств с использованием JavaScript.
Высокий уровень: Адаптивная верстка, реализация интерактивных элементов при наведении, реализация логики бургер-меню и кнопки "Read more" для мобильных устройств без использования JavaScript (Используя CSS).

Требования:
Верстка должна точно соответствовать макету и быть полностью адаптивной. Дизайн включает три вьюпорта, поэтому следует ориентироваться на них.
Запрещено использование любых фреймворков или библиотеки для создания адаптивного дизайна.
При создании сеток следует использовать flex/grid.
Для реализации фона рекомендуется использовать Multiple Backgrounds.
Изображения необходимо оптимизировать и, если возможно, использовать SVG.

Рекомендации
Для создания проекта рекомендуется использовать react-шаблон через команду npx create-react-app my-app 
2а) Альтернативно уже с SASS через команду:  npx create-react-app cra-sass
Верстку следует реализовать в компоненте App.js.
Стили рекомендуется хранить в файле App.scss. Использование препроцессора по желанию.
Для наименования классов предпочтительна методология БЭМ.
В реализации можно добавлять различные данные и использовать React Hooks.
Проект следует присылать в архиве без папки node modules, с указанием своей конкретной версии node и npm. 
Дополнительно можно развернуть на github page 
инструкция hhttps://www.youtube.com/watch?v=jnyMoXlbEno 
