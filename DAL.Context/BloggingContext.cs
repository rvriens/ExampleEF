namespace WebLibrary
{
    using System;
    using System.Data.Entity;
    using System.Linq;
    using BusinessLibrary;

    public class BloggingContext : DbContext
    {
        // Your context has been configured to use a 'BloggingContext' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'WebLibrary.BloggingContext' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'BloggingContext' 
        // connection string in the application configuration file.
        public BloggingContext()
            : base("name=BloggingContext")
        {
        }

        public BloggingContext(string connectionString) : base(connectionString)
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tag>()
                .Property(q => q.Name)
                .HasMaxLength(10)
                .IsRequired();
        }
        
        public static System.Data.Entity.Migrations.DbMigrationsConfiguration CreateConfiguration()
        {
            return new WebLibrary.Migrations.Configuration();
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        // public virtual DbSet<MyEntity> MyEntities { get; set; }
        public virtual DbSet<Blog> Blogs { get; set; }
        public virtual DbSet<Post> Posts { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }



        public int DoSaveChanges()
        {
            return base.SaveChanges();
        }
       
    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}