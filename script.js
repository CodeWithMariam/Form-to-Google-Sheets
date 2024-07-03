
const scriptURL = 'https://script.google.com/macros/s/AKfycbxducnCsb7AOEQFgaMRmKNcTYXUn5KZFk4iVt5ent-PkTzYhKOu9Uc1SRN8AKdF3zkz/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
       msg.innerHTML = "Thank You For Subscription!"
       setTimeout(function(){
        msg.innerHTML = "";
       },3000)
       form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })