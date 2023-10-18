const themeButtons = document.querySelectorAll('.header-theme-menu-button');

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themeButtons.forEach((btn) => {
      btn.classList.remove('header-theme-menu-button-active');
      btn.removeAttribute('disabled');
    });
    if (
      [...button.classList].includes('header-theme-menu-button-type-light')
    ) {
      changeTheme('light');
    } else if (
      [...button.classList].includes('header-theme-menu-button-type-dark')
    ) {
      changeTheme('dark');
    } else {
      changeTheme('auto');
    }
    button.classList.add('header-theme-menu-button-active');
    button.setAttribute('disabled', true);
  });
});

function changeTheme(theme) {
  document.body.className = 'page';
  document.body.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
    themeButtons.forEach((btn) => {
      btn.classList.remove('header-theme-menu-button-active');
      btn.removeAttribute('disabled');
    });
    document
      .querySelector(`.header-theme-menu-button_type_${theme}`)
      .classList.add('header-theme-menu-button-active');
    document
      .querySelector(`.header-theme-menu-button-type_${theme}`)
      .setAttribute('disabled', true);
  }
}

initTheme();
