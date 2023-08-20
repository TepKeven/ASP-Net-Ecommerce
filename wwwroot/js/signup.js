function signupNext(e){
    var current_form = e.target.parentNode.parentNode;
    var next_form = current_form.nextElementSibling;
    current_form.classList.add("d-none");
    next_form.classList.remove("d-none");
}

function signupBack(e){
    var current_form = e.target.parentNode.parentNode;
    var previous_form = current_form.previousElementSibling;
    current_form.classList.add("d-none");
    previous_form.classList.remove("d-none");
}