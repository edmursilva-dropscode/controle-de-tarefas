using Microsoft.EntityFrameworkCore;
using ControleDeTarefasAPI.Context;

namespace ControleDeTarefasAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var myAllowSpecifcOrigins = "myAllowSpecificOrigins";   //adicionando nivel/origem de conexao de sistema
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();

            //adicionando string de conexao do banco de dados
            builder.Services.AddDbContext<TarefaContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("ConexaoPadrao")));

            // Habilitar Cors para ser usado pelo sistema            
            builder.Services.AddCors(options => options.AddPolicy(name: myAllowSpecifcOrigins, builder => builder.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader()));

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors(myAllowSpecifcOrigins);     //Aviso de utilizacao do Cors para pelo sistema

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}