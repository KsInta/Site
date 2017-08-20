var panelItemMentors = document.querySelectorAll('.panel-title-mentors'),
  activeMentors = document.getElementsByClassName('panel-mentors-active');

Array.from(panelItemMentors).forEach(function(item, i, panelItemMentors) {
  item.addEventListener('click', function(e) {
    if (activeMentors.length > 0 && activeMentors[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
      activeMentors[0].classList.remove('panel-mentors-active'); // убрать класс panel-active

    // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
    this.classList.toggle('panel-mentors-active');
  });
});

var panelItemParents = document.querySelectorAll('.panel-title-parents'),
  activeParents = document.getElementsByClassName('panel-parents-active');
  
Array.from(panelItemParents).forEach(function(item, i,panelItemParents) {
  item.addEventListener('click', function(e) {
    if (activeParents.length > 0 && activeParents[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
      activeParents[0].classList.remove('panel-parents-active'); // убрать класс panel-active
  
      // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
    this.classList.toggle('panel-parents-active');
  });
});  