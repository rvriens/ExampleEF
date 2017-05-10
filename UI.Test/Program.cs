using BusinessLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLibrary;

namespace UITest
{
    class Program
    {
        static void Main(string[] args)
        {
            DoAction();

            Console.WriteLine("Press enter to close");
            Console.ReadLine();
        }

        private static void DoAction()
        {

            Console.WriteLine("Add blog, posts and tags");
            BloggingContext dbContext = new BloggingContext("Data Source=.;Initial Catalog=Blogging;User ID=blogging;Password=blogging");

            Blog blog = new Blog();
            blog.Name = "Hi";
            blog.CreateDateTime = DateTime.Now;
            blog.UpdateDateTime = DateTime.Now;


            Tag tag1 = dbContext.Tags.Where(q => q.Name == "hi").FirstOrDefault();
            if (tag1 == null)
            {
                tag1 = new Tag() { Name = "hi" };
            }

            Tag tag2 = dbContext.Tags.Where(q => q.Name == "bye").FirstOrDefault();
            if (tag2 == null)
            {
                tag2 = new Tag() { Name = "bye" };
            }


            dbContext.Tags.AddRange(new List<Tag>{ tag1, tag2});

            for (int i = 0; i < 10; i++)
            {
                Post post = new Post();
                post.Title = "Jo " + i;
                post.Content = "text " + i;

                post.Tags.Add(tag1);
                post.Tags.Add(tag2);

                blog.Posts.Add(post);
            }
            

            dbContext.Blogs.Add(blog);
            dbContext.SaveChanges();

        }
    }
}
