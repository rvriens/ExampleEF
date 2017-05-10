namespace WebLibrary.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUpdateDateTime : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Blogs", "UpdateDateTime", c => c.DateTime(nullable: false, defaultValueSql: "GETDATE()"));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Blogs", "UpdateDateTime");
        }
    }
}
