export default function dropdowns() {
        const dropdownParents = document.querySelectorAll('.dropdown-parent');
        
        dropdownParents.forEach(parent => {
          parent.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const dropdownContent = this.nextElementSibling;
            
            document.querySelectorAll('.dropdown-content.triggered').forEach(content => {
              if (content !== dropdownContent) {
                content.classList.remove('triggered');
              }
            });
            
            dropdownContent.classList.toggle('triggered');
          });
        });
        
        document.addEventListener('click', function(e) {
          if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content.triggered').forEach(content => {
              content.classList.remove('triggered');
            });
          }
        });
}