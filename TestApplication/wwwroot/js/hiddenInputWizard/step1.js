$(document).ready(function () {
    var $wizardData = $("#wizardData");
    var wizardObject = {};

    var $nextButton = $("#nextButton");

    if ($wizardData) {
        try {
            wizardObject = JSON.parse($wizardData.val());
        } catch (e) {
            console.log("Error parsing wizard data");
        }
    }

    if (wizardObject && wizardObject.Bear) {
        $("#bearTxt").val(wizardObject.Bear);
    }

    if ($nextButton) {
        $nextButton.click(onNextButtonClick)
    }

    function onNextButtonClick() {
        wizardObject.Bear = $("#bearTxt").val();
        $wizardData.val(JSON.stringify(wizardObject));

        var model = {
            Bear: wizardObject.Bear
        }

        window.WizardController.Next(1, model);
    }
})