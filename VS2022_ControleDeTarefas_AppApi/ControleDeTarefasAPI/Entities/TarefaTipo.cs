using System.ComponentModel.DataAnnotations;

namespace ControleDeTarefasAPI.Entities
{
    public class TarefaTipo
    {
        //propriedades
        public int Id { get; set; }

        [MaxLength(20)]
        public string Descricao { get; set; } = string.Empty;

    }
}
