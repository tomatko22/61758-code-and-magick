'use strict';
//Параметры для изменения внешнего вида волшебников
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)','rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

//окно настроек
var userDialog = document.querySelector('.overlay');
//Шаблон волшебника(содержимое шаблона template)
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
//Список волшебников
var similarListElement = document.querySelector('.setup-similar-list');
// Фрагмент(оболочка), который будет содержать список похожих волшебников
var fragment = document.createDocumentFragment();

// Функция, возвращающая случайный элемент массива
var getRandomArrElement = function (arr) {
  var random = Math.floor(Math.random() * arr.length);

  return random;
}

// Функция, генерирующая массив с определенным количеством объектов (волшебников)
var getWizards = function (quantity) {
  var wizards = [];
  for (var i = 0; i < quantity; i++) {
    wizards[i] = {
      name: wizardNames[getRandomArrElement(wizardNames)] + '\n' + wizardSurnames[getRandomArrElement(wizardSurnames)],
      coatColor: coatsColors[getRandomArrElement(coatsColors)],
      eyesColor: eyesColors[getRandomArrElement(eyesColors)]
    };
  }

  return wizards;
};

// Функция отрисовки волшебника
var renderWizard = function (wizardData) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    //Задаем имя, цвет плаща и глаз
    wizardElement.querySelector('.setup-similar-label').textContent = wizardData.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardData.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardData.eyesColor;

    return wizardElement;
};

// Функция, добавляющая все похожие элементы во фрагмент
var addWizards = function (array, element) {
  for (var i = 0; i < array.length; i++) {
    var element = renderWizard(array[i]);
    fragment.appendChild(element);
  }
}


// Получаем массив с волшебниками
var wizards = getWizards(4);

//Добавляем всех похожих волшебников во фрагмент
addWizards(wizards, wizard)

//Делаем видимым окно настроек волшебника
userDialog.classList.remove('hidden');

//Делаем видимым поле списка для похожих волшебников
document.querySelector('.setup-similar').classList.remove('hidden');

//Добавляем фрагмент
similarListElement.appendChild(fragment);
