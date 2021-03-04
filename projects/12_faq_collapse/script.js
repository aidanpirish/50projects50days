const faqTogs = document.querySelectorAll('.faq-toggle')
//const faqs = document.querySelectorAll('.faq')

faqTogs.forEach((faqTog,i) => faqTog.addEventListener('click', (el) => {
    //faqs[i].classList.toggle('active')
    faqTog.parentNode.classList.toggle('active')
}))