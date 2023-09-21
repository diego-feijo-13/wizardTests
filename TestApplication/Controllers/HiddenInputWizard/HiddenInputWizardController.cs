using Microsoft.AspNetCore.Mvc;
using TestApplication.ViewModel;

namespace TestApplication.Controllers.LocalStorageWizard
{
    public class HiddenInputWizardController : Controller
    {
        public IActionResult Index()
        {
            return View("~/Views/HiddenInputWizard/Wizard.cshtml");
        }
    }
}
