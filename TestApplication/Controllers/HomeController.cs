using Microsoft.AspNetCore.Mvc;

namespace TestApplication.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
