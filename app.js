document.addEventListener('DOMContentLoaded', () => {
    
    setInterval(myTimer, 1000);

    function myTimer() {
      const date = new Date();
      document.querySelector('.main').innerHTML = date.toLocaleTimeString();
    }
    
})
