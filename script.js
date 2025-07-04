const checkBoxList = document.querySelectorAll('.custom-checkbox')
const formInput = document.querySelectorAll('.goal-input')
const progressBar = document.querySelector('.progress-bar')
const completedTasks = document.querySelectorAll('.completed')
const progressValue = document.querySelector('.progress-value')


const allGoals = {}


checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    let allFilled = [...formInput].every((input) => {
      return input.value
    });
    if (allFilled) {
      checkbox.parentElement.classList.toggle('completed')
      const inputId = checkbox.nextElementSibling.id
      allGoals[inputId].completed = !allGoals[inputId].completed
      // console.log(allGoals);
      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length


      progressValue.style.width = `${completedGoalsCount / 3 * 100}%`
      progressValue.firstElementChild.innerHTML=`${completedGoalsCount}/3 completed`

    }
    else {
      progressBar.classList.add('show-error')
    }
  })
})

formInput.forEach((i) => {
  i.addEventListener('focus', () => {
    progressBar.classList.remove('show-error')
  })
  i.addEventListener('input', () => {
    if (i.parentElement.classList.contains('completed')) {
      i.value = allGoals[i.id].name
      alert('Cannot change checked item')
    }
    allGoals[i.id] = {
      name: i.value,
      completed: false
    }

  })

})
