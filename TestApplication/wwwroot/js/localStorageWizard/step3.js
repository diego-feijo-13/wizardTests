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

    if (wizardObject && wizardObject.TvShow) {
        $("#tvShowTxt").val(wizardObject.TvShow);
    }

    $("form").on("submit", function (e) {
        e.preventDefault()

        wizardObject.TvShow = $("#tvShowTxt").val();

        localStorage.setItem("wizardData", JSON.stringify(wizardObject));

        $(this).unbind('submit').submit();
    })
})