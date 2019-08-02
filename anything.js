document.addEventListener('DOMContentLoaded', () => {
  const heading = document.getElementById('heading');
  heading.innerHTML = 'Friyay!';

  let count = 0;
  const alcohols = () => {
    count += 1;
    const alcoholscount = document.getElementById('alcoholscount');
    alcoholscount.innerHTML = count;
    console.log('BEERS!');
  };
  window.alcohols = alcohols;
});
