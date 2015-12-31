/**
 * Created by Pol on 2015-12-28.
 */

//Problem: Hints are shown even when password is valid
//Solution: Hide and show them on the appropriet times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");

//Hide hints
$("form span").hide();

function isUsernamePresent () {
    return $username.val().length > 4;
}

function isPasswordValid () {
    return $password.val().length > 8;
}

function arePasswordsMatching () {
    return $password.val() === $confirmPassword.val();
}

function canSubmit () {
    return isUsernamePresent() && isPasswordValid() && arePasswordsMatching();
}

function usernameConfirmEvent () {
    if (isUsernamePresent()) {

        //Hide hint
        $username.next().hide();

    } else {

        //Show hint
        $username.next().show();

    }
}

function passwordEvent(){
    //Find out if the password is valid
    if (isPasswordValid()) {

        //Hide hint if valid
        $password.next().hide();

    } else {

        //Else show hint
        $password.next().show();
    }
}

function passwordConfirmEvent() {

    //Find out if password and conformation match
    if (arePasswordsMatching()) {

        //Hide hint if they match
        $confirmPassword.next().hide();

    } else {

        //Else show hint
        $confirmPassword.next().show();

    }
}

function enableSubmitEvent () {
    $("#submit").prop("disabled", !canSubmit())
}

//When event happens on username input
$username.focus(usernameConfirmEvent).keyup(usernameConfirmEvent).keyup(enableSubmitEvent);


//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(passwordConfirmEvent).keyup(enableSubmitEvent);



//When event happens on conformation
$confirmPassword.focus(passwordConfirmEvent).keyup(passwordConfirmEvent).keyup(enableSubmitEvent);

enableSubmitEvent();


