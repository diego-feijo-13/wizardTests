using Microsoft.AspNetCore.Mvc;
using TestApplication.ViewModel;

namespace TestApplication.Controllers.LocalStorageWizard
{
    public class LocalStorageWizardStep1Controller : Controller
    {
        public IActionResult Index()
        {
            var step1ViewModel = new Step1ViewModel();
            return View("~/Views/LocalStorageWizard/Step1.cshtml", step1ViewModel);
        }

        [HttpPost]
        public IActionResult Next(Step1ViewModel viewModel)
        {
            Validate(viewModel);

            if (!ModelState.IsValid)
            {
                return View("~/Views/LocalStorageWizard/Step1.cshtml", viewModel);
            }

            var step2viewModel = new Step2ViewModel();

            return View("~/Views/LocalStorageWizard/Step2.cshtml", step2viewModel);
        }

        private void Validate(Step1ViewModel viewModel)
        {
            if (string.IsNullOrEmpty(viewModel.Bear))
            {
                ModelState.AddModelError("Bear", "Please inform a type of bear");
            }
        }
    }
}
