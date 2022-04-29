const faqBtnElement = document.getElementById('faq-btn') 
const faqDetailsElement = document.getElementById('faq-details')


function showDetails(){
faqDetailsElement.style.display = 'block'
}

faqBtnElement.addEventListener('click', showDetails)