//load prism js first <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css" integrity="sha512-3hBfCO+Gc3u4GuXx2BnPkmG1WZqu4jbnF+r5G7hbsGi3UatNTsHK8qMy6D6Z3Gikp2FnB/GB3nYkruRAxg9VtA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
document.addEventListener('DOMContentLoaded', function () {
            const sourceCodeElements = document.querySelectorAll('sourcecode');
            
            sourceCodeElements.forEach(function (element) {
                const code = element.textContent.trim();
                const language = element.getAttribute('language') || 'markup'; // Default language is markup
                
                const codeContainer = document.createElement('pre');
                codeContainer.innerHTML = `<code class="language-${language}">${code}</code>`;
                
                element.parentNode.replaceChild(codeContainer, element);
            });
            
            Prism.highlightAll();
        });
