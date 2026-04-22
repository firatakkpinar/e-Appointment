using eAppointmentServer.Domain.Entities;

namespace eAppointmentServer.Application;

public static class Constants
{
    public static List<AppRole> Roles = new()
    {
        new()
        {
            Id = Guid.Parse("8bcad7c8-db17-480c-80a8-1c4420aeea2d"),
            Name = "Admin",
        },
        new()
        {
            Id = Guid.Parse("22a97467-346e-4329-b1a2-760121058cca"),
            Name="Doctor"
        },
        new()
        {
            Id = Guid.Parse("29e0477b-960c-425b-8996-839909718d43"),
            Name="Personel"
        },
        new()
        {
            Id = Guid.Parse("c6985931-189d-4c09-b644-b2cefa73aa84"),
            Name="Patient"
        }
    };
}