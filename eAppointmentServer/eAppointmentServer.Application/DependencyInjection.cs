using Microsoft.Extensions.DependencyInjection;

namespace eAppointmentServer.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddAutoMapper(x=>
        {
            x.AddMaps(typeof(DependencyInjection).Assembly);
        });
        services.AddMediatR(configuration =>
        {
            configuration.RegisterServicesFromAssembly(typeof(DependencyInjection).Assembly);
        });
        return services;
    }
}
