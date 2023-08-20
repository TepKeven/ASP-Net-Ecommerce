using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using asp_net.Models;

namespace asp_net.Controllers;

public class ProductController : Controller
{
    private readonly ILogger<ProductController> _logger;

    public ProductController(ILogger<ProductController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index(int product_id)
    {
       
        ViewData["product_id"] = product_id;
        return View("~/Views/Product/Index.cshtml");
    }
    

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
