$(document).ready(function () {
    var wizardData = localStorage.getItem("wizardData");
    var wizardObject = {};

    if (wizardData) {
        try {
            wizardObject = JSON.parse(wizardData);
        } catch (e) {
            console.log("Error parsing wizard data");
        }
    }

    if (wizardObject) {
        $("#bear").html(wizardObject.Bear);
        $("#food").html(wizardObject.Food);
        $("#tvShow").html(wizardObject.TvShow);
        $("#bearHiddenInput").val(wizardObject.Bear);
        $("#foodHiddenInput").val(wizardObject.Food);
        $("#tvShowHiddenInput").val(wizardObject.TvShow);
    }
})