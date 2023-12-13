document.addEventListener('DOMContentLoaded', function () {
    const variableTags = document.querySelectorAll('variable');

    variableTags.forEach(tag => {
      const name = tag.getAttribute('name');
      const value = tag.innerHTML;

      // Do something with the name and value
      console.log(`변수 이름: ${name}, 값: ${value}`);
    });
  });
