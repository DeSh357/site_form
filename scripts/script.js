window.onload = function () {
    let popup = document.getElementById("popup");
    let inputs = document.getElementsByClassName('input-box');
    let checkbox = document.getElementById('privacy');
    let sign = document.getElementById('sign');
    let alreadyHave = document.getElementById('already-have');

    document.getElementById("name").onkeydown = function (e) {
        if (!isNaN(parseInt(e.key))) {
            return false;
        }

    }

    document.getElementById("username").onkeydown = function (e) {
        let value = e.key;
        if (value === '.' || value === ',') {
            return false;
        }
    }

    document.getElementById('privacy').onchange = function () {
        checkbox.checked ? console.log('Согласен') : console.log('Не согласен');
    }

    sign.onclick = function (e) {
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i].children[1];
            if (!input.value) {
                alert("Заполните поле " + input.previousElementSibling.innerText);
                return false;
            }
        }

        let password = document.getElementById('password').value;
        if (password.length < 8) {
            alert('Пароль слишком короткий (минимум 8 символов)');
            return false;
        }

        if (password !== document.getElementById('password-repeat').value) {
            alert('Пароли не совпадают');
            return false;
        }

        if (!document.getElementById('privacy').checked) {
            alert('Для регистрации подтвердите, что вы согласны с нашими условиями и политикой конфиденциальности');
            return false;
        }

        popup.style.display = 'flex';
    }

    document.getElementById('popup-btn').onclick = function (e) {
        popup.style.display = 'none';
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].children[1].value = '';
        }
        checkbox.checked = false;
        loginLoad();
    }

    alreadyHave.onclick = function () {
        loginLoad();
    }

    function loginLoad() {
        document.getElementById('title').innerText = "Log in to the system";
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let inputLabel = input.children[0].innerText;
            if (inputLabel === 'Full Name' || inputLabel === 'E-mail' || inputLabel === 'Repeat Password') {
                input.remove();
            }
        }
        document.getElementById("input-checkbox").remove();
        sign.innerText = "Sign in";
        alreadyHave.remove();

        sign.onclick = function () {
            for (let i = 0; i < inputs.length; i++) {
                let input = inputs[i].children[1];
                if (!input.value) {
                    alert("Заполните поле " + input.previousElementSibling.innerText);
                    return false;
                }
            }
            document.getElementById('popup-text').innerText = 'Добро пожаловать, ' + document.getElementById('username').value + '!';
            popup.style.display = 'flex';
        }
    }

}