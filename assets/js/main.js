function closeAllDropdowns(){
  console.log('closing dropdowns');
  dropdowns = document.getElementsByClassName('has-dropdown');
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].classList.remove('active')
  }
}


document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

        console.log('click');
      });
    });
  }


  // get All links with .navbar-dropdown-link  class
  let links = document.getElementsByClassName('navbar-dropdown-link');

  if (links.length > 0) {
    // Add a click event on each of them
    for (const link of links) { // You can use `let` instead of `const` if you like

        link.addEventListener('click', (event) => {
          event.preventDefault();

          // toggle collapsed stuff
          closeAllDropdowns();
          let parent = link.closest('.has-dropdown');
          parent.classList.toggle('active')
        });

        // link.addEventListener('mouseover', (event) => {
        //   console.log('hover')
        //   closeAllDropdowns()
        //   let parent =  event.target.closest('.has-dropdown');
        //   parent.classList.add('active');
        // });

        span = link.firstElementChild
        span.onclick = function(event){
          let parent = event.target.closest('.navbar-dropdown-link');
          window.location.href = parent.getAttribute("href")
        }


    }
  }


});
