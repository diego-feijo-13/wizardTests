using Microsoft.AspNetCore.Mvc;
using TestApplication.ViewModel;

namespace TestApplication.Controllers.LocalStorageWizard
{
    public class HiddenInputWizardStep4Controller : Controller
    {

        [HttpPost]
        public IActionResult Next(WizardViewModel viewModel)
        {
            Validate(viewModel);

            if (!ModelState.IsValid)
            {
                return View("~/Views/HiddenInputWizard/Partials/_Step4.cshtml", viewModel);
            }

            return View("~/Views/HiddenInputWizard/Partials/_FinalStep.cshtml");
        }

        private void Validate(WizardViewModel viewModel)
        {
            if (string.IsNullOrEmpty(viewModel.Bear) || viewModel.Bear.ToLower().CompareTo("black") != 0)
                ModelState.AddModelError("Bear", "Wrong! It is the Black Bear.");

            if(string.IsNullOrEmpty(viewModel.Food) || viewModel.Food.ToLower().CompareTo("beats") != 0)
                ModelState.AddModelError("Food", "Wrong! Bear eats beats.");

            if (string.IsNullOrEmpty(viewModel.TvShow) || viewModel.TvShow.ToLower().CompareTo("battlestar galactica") != 0)
                ModelState.AddModelError("TvShow", "Wrong! The best TV Show is Battlestar Galactica.");
        }
    }
}
