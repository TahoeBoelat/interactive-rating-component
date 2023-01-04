// Initialing variable
const webIcon = document.querySelector('#iconWeb')
const webTitle = document.querySelector('#titleWeb')
const webParagraph = document.querySelector('#paragraphWeb')
const ratingButtons = document.querySelectorAll('#btnValue')
const submitBtn = document.querySelector('#buttonSubmit')
const webNotifContainer = document.querySelector('#webNotifContainer')
const newValue = {
    newWebTitle: 'Thank You!',
    newWebParagraph: 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
}
// Web Logic
// Inisialisasi Fungsi
ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        ratingButtons.forEach(button => button.classList.remove('selected'))
        button.classList.add('selected')
    })
})
submitBtn.addEventListener('click', () => {
    // Menggunakan perulangan untuk tombol rating
    for(const button of ratingButtons) {
        // Menggunakan kondisional apabila salah satu tombol rating terpilih
        if(button.classList.contains('selected')) {
            const rating = button.textContent

            // Merubah judul web menggunakan tipe data objek
            webTitle.textContent = newValue.newWebTitle
            // Merubah paragraf web menggunakan tipe data objek
            webParagraph.textContent = newValue.newWebParagraph

            webNotifContainer.style.display = 'block'
        }
    }
})