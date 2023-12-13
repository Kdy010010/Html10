 document.addEventListener('DOMContentLoaded', function () {
    const ifTags = document.querySelectorAll('if');

    ifTags.forEach(tag => {
      const condition = tag.getAttribute('condition');

      if (condition && condition.toLowerCase() === 'true') {
        tag.style.display = 'block';
      } else {
        tag.style.display = 'none';
      }
    });
  });
