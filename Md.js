//load this stuff  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
document.addEventListener('DOMContentLoaded', function () {
  // Find all <md> tags and process them
  var mdTags = document.querySelectorAll('md');
  
  mdTags.forEach(function (mdTag) {
    // Get the Markdown content from the <md> tag
    var markdownContent = mdTag.textContent.trim();
    
    // Convert Markdown to HTML using the Marked library
    var htmlContent = marked(markdownContent);
    
    // Replace the content of the <md> tag with the generated HTML
    mdTag.innerHTML = htmlContent;
  });
});
