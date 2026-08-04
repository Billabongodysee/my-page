// Mobile nav toggle (used on every page)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Contact page: pre-fill "item of interest" from ?item=... on links from the shop page
  var interestField = document.getElementById('item-interest');
  if (interestField) {
    var params = new URLSearchParams(window.location.search);
    var item = params.get('item');
    if (item) interestField.value = item;
  }

  // Contact page: show a confirmation message after the mail client opens.
  // (This is a static site with no backend, so the form hands off to your
  // email app via a mailto: link. Swap in a service like Formspree later
  // if you want submissions to go straight to an inbox without that step.)
  var form = document.getElementById('contact-form');
  var success = document.getElementById('form-success');
  if (form && success) {
    form.addEventListener('submit', function () {
      success.classList.add('show');
    });
  }
});
