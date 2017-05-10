namespace WebLibrary.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCreateDateTime : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Blogs", "CreateDateTime", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Blogs", "CreateDateTime");
        }
    }
}
