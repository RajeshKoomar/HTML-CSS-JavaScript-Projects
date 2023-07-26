function msg() {
    const form = document.querySelector(".form-msg");
    form.addEventListener('submit',function(e){
        e.preventDefault();
        const message = document.querySelector('#message');
        const error = document.querySelector('.Showerror');
        const messageContent = document.querySelector('.msg');

        if(message.value === ''){
            error.classList.add('show');
            setTimeout(function(){
            error.classList.remove('show')
            },5000);
        }
        else{
            messageContent.textContent = message.value;
        }
    })
}