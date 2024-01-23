using Microsoft.EntityFrameworkCore;
using ControleDeTarefasAPI.Entities;


namespace ControleDeTarefasAPI.Context
{
    public class TarefaContext : DbContext
    {
        //construtor de ligação da base de dados
        public TarefaContext(DbContextOptions<TarefaContext> options) : base(options)
        {

        }

        //propriedade representando a entidade/tabela 
        //Tarefas
        public DbSet<Tarefa> Tarefas { get; set; }

        //TarefaTipos
        public DbSet<TarefaTipo> TarefaTipos { get; set; }

        //Status
        public DbSet<Status> Statuses { get; set; }


    }
}
