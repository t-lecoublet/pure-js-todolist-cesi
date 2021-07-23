import './style/main.scss';
import { fizzbuzz, getClassFromResult } from './fizzbuzz';

document.addEventListener('DOMContentLoaded', async function(event) {

    let container = document.getElementById('content');
    
    for(let i = 1; i <= 100; i++){
        let result = fizzbuzz(i);
        let elClass = getClassFromResult(result)

        let doc = document.createElement('div');
        doc.className = `col ${elClass}`;
        doc.innerText = result;

        container.append(doc);
    }
})