using Microsoft.AspNetCore.Mvc;
using TestApplication.ViewModel;

namespace TestApplication.Controllers.LocalStorageWizard
{
    public class LocalStorageWizardStep2Controller : Controller
    {
        public IActionResult Index()
        {
            var step2ViewModel = new Step2ViewModel();
            return View("~/Views/LocalStorageWizard/Step2.cshtml", step2ViewModel);
        }

        [HttpPost]
        public IActionResult Next(Step2ViewModel viewModel)
        {
            Validate(viewModel);

            if (!ModelState.IsValid)
            {
                return View("~/Views/LocalStorageWizard/Step2.cshtml", viewModel);
            }

            var step3viewModel = new Step3ViewModel();

            return View("~/Views/LocalStorageWizard/Step3.cshtml", step3viewModel);
        }

        private void Validate(Step2ViewModel viewModel)
        {
            if (string.IsNullOrEmpty(viewModel.Food))
            {
                ModelState.AddModelError("Food", "Please inform a food");
            }
        }
    }
}
