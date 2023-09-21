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

    if (wizardObject && wizardObject.TvShow) {
        $("#tvShowTxt").val(wizardObject.TvShow);
    }

    if ($backButton) {
        $backButton.click(onBackButtonClick);
    }

    if ($nextButton) {
        $nextButton.click(onNextButtonClick)
    }

    function onBackButtonClick() {
        window.WizardController.GetStep(2);
    }

    function onNextButtonClick() {
        wizardObject.TvShow = $("#tvShowTxt").val();
        $wizardData.val(JSON.stringify(wizardObject));

        var model = {
            TvShow: wizardObject.TvShow
        }

        window.WizardController.Next(3, model);
    }
})