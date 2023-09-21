(function () {
    function getStep(step, onDone, onFail, onAlways) {
        let stepUrl = "/HiddenInputWizardStep" + step + "/Index";

        $.ajax({
            type: "GET",
            cache: false,
            dataType: "html",
            contentType: "application/json; charset=utf-8",
            url: stepUrl,
        })
            .done(onDone)
            .fail(onFail)
            .always(onAlways);
    };

    function next(currentStep, model, onDone, onFail, onAlways) {
        let nextUrl = "/HiddenInputWizardStep" + currentStep + "/Next";

        $.ajax({
            type: "POST",            
            url: nextUrl,
            data: {viewModel: model}
        })
            .done(onDone)
            .fail(onFail)
            .always(onAlways);
    };

    window.WizardApi = {
        GetStep: getStep,
        Next: next
    };
})();

