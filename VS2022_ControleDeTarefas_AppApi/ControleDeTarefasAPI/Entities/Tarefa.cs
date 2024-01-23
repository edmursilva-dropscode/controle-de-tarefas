using System.ComponentModel.DataAnnotations;

namespace ControleDeTarefasAPI.Entities
{
    public class Tarefa
    {
        //propriedades
        public int Id { get; set; }
        
        [MaxLength(20)]
        public string Status { get; set; } = string.Empty;

        [MaxLength(250)]
        public string Comentario { get; set; } = string.Empty;

        public int TarefaTipoId { get; set; }

        public TarefaTipo? TarefaTipo { get; set;}

    }
}
