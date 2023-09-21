using Microsoft.AspNetCore.Mvc;
using TestApplication.ViewModel;

namespace TestApplication.Controllers.LocalStorageWizard
{
    public class LocalStorageWizardStep3Controller : Controller
    {
        public IActionResult Index()
        {
            var step3ViewModel = new Step3ViewModel();
            return View("~/Views/LocalStorageWizard/Step3.cshtml", step3ViewModel);
        }

        [HttpPost]
        public IActionResult Next(Step3ViewModel viewModel)
        {
            Validate(viewModel);

            if (!ModelState.IsValid)
            {
                return View("~/Views/LocalStorageWizard/Step3.cshtml", viewModel);
            }

            var model = new WizardViewModel();

            return View("~/Views/LocalStorageWizard/Step4.cshtml", model);
        }

        private void Validate(Step3ViewModel viewModel)
        {
            if (string.IsNullOrEmpty(viewModel.TvShow))
            {
                ModelState.AddModelError("TvShow", "Please inform a TV Show");
            }
        }
    }
}
