using MediatR;
using TS.Result;

namespace eAppointmentServer.Application.Features.DeleteAppointmentById;

    public sealed record DeleteAppointmentByIdCommand(
        Guid Id):IRequest<Result<string>>;


