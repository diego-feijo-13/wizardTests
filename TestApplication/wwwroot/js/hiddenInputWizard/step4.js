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

    if (wizardObject) {
        $("#bear").html(wizardObject.Bear);
        $("#food").html(wizardObject.Food);
        $("#tvShow").html(wizardObject.TvShow);
    }

    if ($backButton) {
        $backButton.click(onBackButtonClick);
    }

    if ($nextButton) {
        $nextButton.click(onNextButtonClick)
    }

    function onBackButtonClick() {
        window.WizardController.GetStep(3);
    }

    function onNextButtonClick() {       

        var model = {
            Bear: wizardObject.Bear,
            Food: wizardObject.Food,
            TvShow: wizardObject.TvShow
        }

        window.WizardController.Next(4, model);
    }
})

