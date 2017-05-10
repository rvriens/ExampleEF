using BusinessLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebLibrary;

namespace WebEntityFramework
{
    public partial class TestPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            using (var db = new WebLibrary.BloggingContext())
            {
                for (int i = 0; i < 10; i++)
                {



                    Blog blog = (from q in db.Blogs where q.Name == "blog" + i select q).FirstOrDefault();

                    if (blog == null)
                    {
                        blog = new Blog { Name = "blog" + i };
                        db.Blogs.Add(blog);
                        db.SaveChanges();
                    }
                }
                // Display all Blogs from the database 
                var query = from b in db.Blogs
                            orderby b.Name
                            select b;

                lblMessage.Text = string.Join(",", query.Select((q) => q.Name).ToArray());
                
            }

             
        }
    }
}