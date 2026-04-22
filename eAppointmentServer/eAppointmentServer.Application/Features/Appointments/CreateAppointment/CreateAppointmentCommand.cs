using MediatR;
using TS.Result;

namespace eAppointmentServer.Application.Features.Appointments.CreateAppointment;

public sealed record CreateAppointmentCommand(
    string StartDate,
    string EndDate,
    Guid? PatientId,
    Guid DoctorId,
    string FirstName,
    string LastName,
    string IdentityNumber,
    string City,
    string Town,
    string FullAddress
    ): IRequest<Result<string>>;
