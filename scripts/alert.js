/**
 * @param {string} message
 */
function alert(message) {
    return new Promise(resolve => {
        message = message.replace(/\n/gi, '<br>');
        const alertBox = document.createElement("div");
        alertBox.setAttribute("class", "alert");
        const msgBox = document.createElement("div");
        msgBox.innerHTML = message;
        const okbtn = document.createElement("button");
        okbtn.setAttribute("class", "al_okbtn");
        okbtn.innerText = "확인";
        alertBox.appendChild(msgBox);
        alertBox.appendChild(okbtn);

        document.body.appendChild(alertBox);

        okbtn.focus();

        okbtn.onclick = () => {
            alertBox.remove();
            resolve(undefined);
        }
    });
}

/**
 * @param {string} message
 * @param {string} value
 * @param {string} type
 */
function prompt(message, value = null, type = "text") {
    return new Promise(resolve => {
        message = message.replace(/\n/gi, '<br>');
        const alertBox = document.createElement("div");
        alertBox.setAttribute("class", "prompt");
        const msgBox = document.createElement("div");
        msgBox.innerHTML = message;

        const inp = document.createElement("input");
        inp.setAttribute("type", type);
        inp.setAttribute("class", "al_inputBox");
        inp.value = value;

        const okbtn = document.createElement("button");
        okbtn.setAttribute("class", "al_okbtn");
        okbtn.innerText = "확인";

        alertBox.appendChild(msgBox);
        alertBox.appendChild(inp);
        alertBox.appendChild(okbtn);

        document.body.appendChild(alertBox);

        inp.focus();

        inp.onkeydown = function() {
            if(event.keyCode == 13) {
                okbtn.click();
            }
        }

        okbtn.onclick = () => {
            alertBox.remove();
            resolve(inp.value);
        }
    });
}

/**
 * @param {string} message
 */
function confirm(message) {
    return new Promise(resolve => {
        message = message.replace(/\n/gi, '<br>');
        const alertBox = document.createElement("div");
        alertBox.setAttribute("class", "confirm");
        const msgBox = document.createElement("div");
        msgBox.innerHTML = message;

        const buttonDiv = document.createElement("div");
        buttonDiv.setAttribute("class", "al_buttonBox");

        const okbtn = document.createElement("button");
        okbtn.setAttribute("class", "al_okbtn");
        okbtn.innerText = "확인";
        const cancelbtn = document.createElement("button");
        cancelbtn.setAttribute("class", "al_cancelbtn");
        cancelbtn.innerText = "취소";

        buttonDiv.appendChild(okbtn);
        buttonDiv.appendChild(cancelbtn);

        alertBox.appendChild(msgBox);
        alertBox.appendChild(buttonDiv);

        document.body.appendChild(alertBox);

        cancelbtn.focus();

        okbtn.onclick = () => {
            alertBox.remove();
            resolve(true);
        }

        cancelbtn.onclick = () => {
            alertBox.remove();
            resolve(false);
        }
    });
}

document.oncontextmenu = () => {
    return false;
}

document.onmousedown = () => {
    if(event.target.getAttribute("class") != "al_inputBox" && hasAlert()) {
        event.preventDefault();
        return false;
    }
}

const hasAlert = () => {
    return document.getElementsByClassName("alert").length > 0 || document.getElementsByClassName("prompt").length > 0 || document.getElementsByClassName("confirm").length > 0;
}
