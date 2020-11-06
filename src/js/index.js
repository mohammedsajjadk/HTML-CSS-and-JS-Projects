//DOM elements
const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next'
};

//remove class from a set of items
const removeClasses = (elemSet, className) => {
  elemSet.forEach(elem => {
      elem.classList.remove(className);
  });
};

//return exact parent node of the element
const findParent = (elem, parentClass) => {
  let currentNode = elem;
  while (!currentNode.classList.contains(parentClass)) {
      currentNode = currentNode.parentNode;
  }
  return currentNode;
};

//get active button step number
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep = activeStepNum => {
  //remove active state from all the state
  removeClasses(DOMstrings.stepsBtns, 'js-active');
  //set picked items to active
  DOMstrings.stepsBtns.forEach((elem, index) => {
      if (index <= activeStepNum) {
          elem.classList.add('js-active');
      }
  });
};

//get active panel
const getActivePanel = () => {
  let activePanel;
  DOMstrings.stepFormPanels.forEach(elem => {
      if (elem.classList.contains('js-active')) {
          activePanel = elem;
      }
  });
  return activePanel;
};

//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => {
  //remove active class from all the panels
  removeClasses(DOMstrings.stepFormPanels, 'js-active');
  //show active panel
  DOMstrings.stepFormPanels.forEach((elem, index) => {
      if (index === activePanelNum) {
          elem.classList.add('js-active');
          setFormHeight(elem);
      }
  });
};

//set form height equal to current panel height
const formHeight = activePanel => {
  const activePanelHeight = activePanel.offsetHeight;
  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
};

const setFormHeight = () => {
  const activePanel = getActivePanel();
  formHeight(activePanel);
};

//STEPS BAR CLICK FUNCTION
DOMstrings.stepsBar.addEventListener('click', e => {
  //check if click target is a step button
  const eventTarget = e.target;
  if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
      return;
  }
  //get active button step number
  const activeStep = getActiveStep(eventTarget);
  //set all steps before clicked (and clicked too) to active
  setActiveStep(activeStep);
  //open active panel
  setActivePanel(activeStep);
});

//PREV/NEXT BTNS CLICK
DOMstrings.stepsForm.addEventListener('click', e => {
  const eventTarget = e.target;
  //check if we clicked on `PREV` or NEXT` buttons
  if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`))) {
      return;
  }
  //find active panel
  const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
  if(eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`) && !validateForm(activePanelNum)) {
    return;
  } 

  //set active step and active panel onclick
  if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
      activePanelNum--;
  } else {
      activePanelNum++;
  }
  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);
});

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);


// document.querySelector('form').addEventListener('submit', e => {
//   e.preventDefault();
//   console.log('Submitted')
// })

function validateForm(activePanelNum) {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("multisteps-form__content");
  y = x[activePanelNum].querySelectorAll("input[required]");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    } else {
      y[i].classList.remove("invalid");
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  // if (valid) {
  //   document.getElementsByClassName("multisteps-form__content")[activePanelNum].className += " finish";
  // }
  return valid; // return the valid status
}

document.querySelector('.cloudPlatform').addEventListener('click', (e) => {
  if(e.target.matches('#cloudPlatform-Yes')) {
    e.target.setAttribute('checked', 'checked')
    document.querySelector('.cloudPlatform #cloudPlatform-No').setAttribute('checked', '')
    document.querySelector('.cloud-Yes-Form').hidden = false;
  } else if(e.target.matches('#cloudPlatform-No')) {
    e.target.setAttribute('checked', 'checked')
    document.querySelector('.cloudPlatform #cloudPlatform-Yes').setAttribute('checked', '')
    document.querySelector('.cloud-Yes-Form').hidden = true;
  } 
})

// if(document.querySelector('input[id="cloudPlatform-Yes"]:checked')) {
//       document.querySelector('.new-form').hidden = false;
// } else if(document.querySelector('input[id="cloudPlatform-No"]:checked')) {
//       document.querySelector('.new-form').hidden = true;
// }

document.querySelector('.landing-page__form').addEventListener('click', e => {
  
  if(e.target.classList.contains('js-btn-newq-yes')) {
    // show the multistep form
    document.querySelector('.landing-page').hidden = true;
    document.querySelector('.multisteps-form').hidden = false;
  } else if(e.target.classList.contains('js-btn-newq-no')) {

    // Hide the landing page panel
    document.querySelector('.landing-page__panel').hidden = true;
    // show the search form
    document.querySelector('.search-form__panel').hidden = false;
  }
})