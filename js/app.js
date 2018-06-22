document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');

    const handleFormSubmit = function(event){
      event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const species = form.species.value;
        const continent = form.continent.value;

        const selectResult = document.querySelector('#select-result');
        const readingList = document.querySelector('#reading-list');
      readingList.textContent = ` ${name} ${species} ${continent}`;

      form.reset();
    }

  form.addEventListener('submit', handleFormSubmit);


});
