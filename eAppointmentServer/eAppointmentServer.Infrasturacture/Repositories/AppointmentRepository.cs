using eAppointmentServer.Domain.Entities;
using eAppointmentServer.Domain.Repositories;
using eAppointmentServer.Infrasturacture.Context;
using GenericRepository;

namespace eAppointmentServer.Infrasturacture.Repositories;

internal sealed class AppointmentRepository : Repository<Appointment, ApplicationDbContext>, IAppointmentRepository
{
    public AppointmentRepository(ApplicationDbContext context) : base(context)
    {
    }
}


