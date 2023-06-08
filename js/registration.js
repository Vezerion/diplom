const signUpForm = document.querySelector('.signup__form');
const signInForm = document.querySelector('.signin__form');
    

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res;
};

function bindPostData(form, url) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const formData = new FormData(form);
        
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        console.log(json);
        postData(url, json)
        .then((data)=> {
            console.log(data.text());
            // if(data.status == 200) {
            //     console.log("ok");
            // } else if(data.status == 207) {
            //     throw new Error();
            // }
            // console.log(data.status);
            window.location.href = 'account.html';
        })
        .catch(() => {
            const name = document.querySelector('.signup__form__name');
            name.style.border = "1px solid red";
            console.log('Ошибка');
        }).finally(() => {
            form.reset();
        });
    });
}
bindPostData(signUpForm, 'registration.php');
bindPostData(signInForm, 'registration.php');