using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Hosting;
using System.IO;

namespace UI.Angular.Controllers
{
    public class SpaController : ApiController
    {
        public HttpResponseMessage Get()
        {
            var indexHtml = HostingEnvironment.MapPath("~/index.html");

            var stringContent = new StreamContent(File.OpenRead(indexHtml));
            var response = new HttpResponseMessage(HttpStatusCode.OK) { Content = stringContent };

            return response;
        }
    }
}
