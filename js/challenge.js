document.addEventListener('DOMContentLoaded', () => {

  const secondsCounter = document.getElementById('counter')
  const plus = document.getElementById('plus')
  const minus = document.getElementById('minus')
  const heart = document.getElementById('heart')
  const pause = document.getElementById('pause')
  const subComment = document.getElementById('submit')
  const leaveComment = document.getElementsByTagName('div')[0]
  let paused = false;
  let count = secondsCounter.innerHTML;
  let likes = []
  let intervalId = setInterval( () => { secondsCounter.innerHTML = count++ }, 1000)


  plus.addEventListener('click', () => {
    secondsCounter.innerHTML = count++
  })

  minus.addEventListener('click', () => {
    secondsCounter.innerHTML = count--
  })

  heart.addEventListener('click', () => {
    const ul = document.getElementsByClassName('likes')[0]
    const li = document.createElement('li')
    li.dataset.id = `${secondsCounter.innerText}`
    let currentCount = secondsCounter.innerText
    likes.push(currentCount)
    li.innerText = `${currentCount} has been liked ${likes.filter(num => num === currentCount).length} time(s)`;
    ul.appendChild(li)
  });

  pause.addEventListener('click', () => {

    if (pause.innerText === 'pause'){
      clearInterval(intervalId)
      pause.innerText = 'resume'
    } else {
      intervalId = setInterval( () => { secondsCounter.innerText = count++ }, 1000);
      pause.innerText = 'pause'
    }


    if (plus.disabled === false){
      plus.disabled = true
    } else {
      plus.disabled = false
    }

    if (minus.disabled === false){
      minus.disabled = true
    } else {
      minus.disabled = false
    }

    if (heart.disabled === false){
      heart.disabled = true
    } else {
      heart.disabled = false
    }

  });

  subComment.addEventListener('click', (e) => {
    e.preventDefault()
    const commentInput = document.getElementById('comment-input')
    const comment = document.createElement('p')
    leaveComment.appendChild(comment)
    
    comment.innerHTML = commentInput.value
    commentInput.value = "" // reset input value
  });

});
