using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleMigration
{
    class Program
    {
        static void Main(string[] args)
        {
            var migrate = new Migrate("Data Source=.;Initial Catalog=Blogging;User ID=blogging;Password=blogging");
            migrate.DoMigration();

            Console.WriteLine("Press enter to close");
            Console.ReadLine();
        }
    }
}
