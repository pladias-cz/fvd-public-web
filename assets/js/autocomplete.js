import {getAppBasePath, redirect} from "pladias-geoservices/src/common/http_helpers";

export default function autocomplete() {
    const inputs = document.querySelectorAll('.autocomplete');
    
    inputs.forEach(input => {
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'autocomplete-results';
        input.parentElement.appendChild(resultsContainer);
        
        let currentFocus = -1;
        
        input.addEventListener('input', async function() {
            const value = this.value;
            currentFocus = -1;
            
            if (value.length < 2) {
                resultsContainer.innerHTML = '';
                resultsContainer.style.display = 'none';
                return;
            }
            
            const source = getAppBasePath() + this.dataset.source;
            
            try {
                const response = await fetch(`${source}?term=${encodeURIComponent(value)}`);
                const data = await response.json();
                
                resultsContainer.innerHTML = '';
                
                if (data.length === 0) {
                    resultsContainer.style.display = 'none';
                    return;
                }
                
                data.forEach((item) => {
                    const div = document.createElement('div');
                    div.className = 'autocomplete-item';
                    div.textContent = item.label || item.value;
                    div.dataset.value = item.value;
                    
                    div.addEventListener('click', () => selectItem(item.value, input));
                    
                    resultsContainer.appendChild(div);
                });
                
                resultsContainer.style.display = 'block';
            } catch (error) {
                console.error('Autocomplete error:', error);
            }
        });
        
        input.addEventListener('keydown', function(e) {
            const items = resultsContainer.querySelectorAll('.autocomplete-item');
            
            if (e.key === 'ArrowDown') {
                currentFocus++;
                addActive(items);
                e.preventDefault();
            } else if (e.key === 'ArrowUp') {
                currentFocus--;
                addActive(items);
                e.preventDefault();
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (currentFocus > -1 && items[currentFocus]) {
                    items[currentFocus].click();
                } else if (this.dataset.listenEnter) {
                    document.body.style.cursor = 'wait';
                    const newLocation = getAppBasePath() + this.dataset.target + '/' + encodeURIComponent(this.value);
                    redirect(newLocation);
                }
            }
        });
        
        function addActive(items) {
            if (!items || items.length === 0) return;
            removeActive(items);
            if (currentFocus >= items.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = items.length - 1;
            items[currentFocus]?.classList.add('active');
        }
        
        function removeActive(items) {
            items.forEach(item => item.classList.remove('active'));
        }
        
        function selectItem(value, inputElement) {
            document.body.style.cursor = 'wait';
            const newLocation = getAppBasePath() + inputElement.dataset.target + '/' + encodeURIComponent(value);
            redirect(newLocation);
        }
        
        document.addEventListener('click', function(e) {
            if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
                resultsContainer.style.display = 'none';
            }
        });
    });
}