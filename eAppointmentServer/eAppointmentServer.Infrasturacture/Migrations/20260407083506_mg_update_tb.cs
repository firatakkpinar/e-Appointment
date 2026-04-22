using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace eAppointmentServer.Infrasturacture.Migrations
{
    /// <inheritdoc />
    public partial class mg_update_tb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsDeleted",
                table: "Appointments",
                newName: "IsCompleted");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsCompleted",
                table: "Appointments",
                newName: "IsDeleted");
        }
    }
}
