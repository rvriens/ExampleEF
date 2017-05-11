# Migrations

Start with: Tools > NuGet Package Manager > Package Manager Console

## Enabling the migrations

Set DAL.Context as Startup Project.

    Enable-Migrations

## Adding new migrations

Update to latest database version ( _Update-Database_ )

    Add-Migration <naam-migratie>

## Update database

    Update-Database

Rollback/update to specific version:
    Update-Database -TargetMigration <name-migration>