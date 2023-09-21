(function () {
    let $stepsContainer = $("#stepsContainer");

    function getStep(step) {
        window.WizardApi.GetStep(step, onGetStepDone)
    }
    function onGetStepDone(response) {
        $stepsContainer.html(response);        
    }

    function next(step, model) {                
        window.WizardApi.Next(step, model, onNextDone);
    }

    function onNextDone(response) {
        $stepsContainer.html(response);        
    }

    window.WizardController = {        
        GetStep: getStep,
        Next: next
    };
})();

$(document).ready(function () {
    window.WizardController.GetStep(1);
})