namespace WebLibrary.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TagsModelCreating : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Tags", "Name", c => c.String(nullable: false, maxLength: 10));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Tags", "Name", c => c.String());
        }
    }
}
