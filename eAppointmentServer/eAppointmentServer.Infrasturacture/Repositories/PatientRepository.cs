using eAppointmentServer.Domain.Entities;
using eAppointmentServer.Domain.Repositories;
using eAppointmentServer.Infrasturacture.Context;
using GenericRepository;

namespace eAppointmentServer.Infrasturacture.Repositories;

internal sealed class PatientRepository : Repository<Patient, ApplicationDbContext>, IPatientRepository
{
    public PatientRepository(ApplicationDbContext context) : base(context)
    {
    }
}


