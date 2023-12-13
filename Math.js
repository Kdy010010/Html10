document.addEventListener('DOMContentLoaded', function () {
    const mathTags = document.querySelectorAll('math');

    mathTags.forEach(tag => {
      const expression = tag.getAttribute('expression');
      if (expression) {
        const result = calculateExpression(expression);
        tag.innerHTML = result;
      }
    });

    function calculateExpression(expression) {
      try {
        // Use Function constructor to avoid using eval()
        const fn = new Function('return ' + expression);
        return fn();
      } catch (error) {
        console.error('Error evaluating expression:', error);
        return 'Error';
      }
    }
  });
