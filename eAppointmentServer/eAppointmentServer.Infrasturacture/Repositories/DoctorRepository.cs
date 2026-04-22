using eAppointmentServer.Domain.Entities;
using eAppointmentServer.Domain.Repositories;
using eAppointmentServer.Infrasturacture.Context;
using GenericRepository;

namespace eAppointmentServer.Infrasturacture.Repositories;

internal sealed class DoctorRepository : Repository<Doctor, ApplicationDbContext>, IDoctorRepository
{
    public DoctorRepository(ApplicationDbContext context) : base(context)
    {
    }
}


