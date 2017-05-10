using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Migrations;
using System.Data.Entity.Migrations.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLibrary;

namespace ConsoleMigration
{
    class Migrate
    {
        private string _connectionString;
        public Migrate(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void DoMigration()
        {
            //using (var db = new WebLibrary.BloggingContext(_connectionString))
            //{




            //}

            //System.Data.Entity.MigrateDatabaseToLatestVersion<>

            //        var dbMigrator = new System.Data.Entity.Migrations.DbMigrator(
            //            new WebLibrary.Migrations.InitialCreate
            //new Lcmp.EF.Migrations.Migrations.Configuration());
            //        dbMigrator.Update();
            //    }



            DbMigrationsConfiguration configuration = BloggingContext.CreateConfiguration();  //new WebLibrary.Migrations.Configuration();
           
            var dbmigrator = new DbMigrator(configuration);
            dbmigrator.Configuration.TargetDatabase = new DbConnectionInfo(_connectionString, "System.Data.SqlClient");
                //new DbConnectionInfo("Data Source=.;Initial Catalog=Blogging;User ID=blogging;Password=blogging", "System.Data.SqlClient");
            foreach (string migration in dbmigrator.GetPendingMigrations())
            {
                Console.WriteLine(string.Format("{0}", migration));
            }

            // Database.SetInitializer(new MigrateDatabaseToLatestVersion<WebLibrary.BloggingContext, WebLibrary.Migrations.Configuration>());

            Database.SetInitializer<WebLibrary.BloggingContext>(null);
            var migrations = dbmigrator.GetPendingMigrations();
            if (migrations.Any())
            {
                var scriptor = new MigratorScriptingDecorator(dbmigrator);
                using (var db = new WebLibrary.BloggingContext(_connectionString))
                {
                    using (var dbContextTransaction = db.Database.BeginTransaction())
                    {
                        string prevMigration = null;
                        foreach (string migration in dbmigrator.GetPendingMigrations())
                        {
                            string script = scriptor.ScriptUpdate(prevMigration, migration);
                            if (!String.IsNullOrEmpty(script))
                            {
                                Console.WriteLine(string.Format("{0}: {1}", migration, script));


                                db.Database.Initialize(false);
                                db.Database.ExecuteSqlCommand(script);
                            }
                            prevMigration = migration;

                        }
                        dbContextTransaction.Commit();
                    }
                    
                }
            
            }
            //dbmigrator.Update();
        }
    }
}
