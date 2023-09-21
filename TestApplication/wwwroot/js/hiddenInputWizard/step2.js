$(document).ready(function () {
    var $wizardData = $("#wizardData");
    var wizardObject = {};

    var $nextButton = $("#nextButton");
    var $backButton = $("#backButton");

    if ($wizardData) {
        try {
            wizardObject = JSON.parse($wizardData.val());
        } catch (e) {
            console.log("Error parsing wizard data");
        }
    }

    if (wizardObject && wizardObject.Food) {
        $("#foodTxt").val(wizardObject.Food);
    }

    if ($backButton) {
        $backButton.click(onBackButtonClick);
    }

    if ($nextButton) {
        $nextButton.click(onNextButtonClick)
    }

    function onBackButtonClick() {
        window.WizardController.GetStep(1);
    }

    function onNextButtonClick() {
        wizardObject.Food = $("#foodTxt").val();
        $wizardData.val(JSON.stringify(wizardObject));

        var model = {
            Food: wizardObject.Food
        }

        window.WizardController.Next(2, model);
    }
})