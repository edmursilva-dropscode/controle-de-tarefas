using System.ComponentModel.DataAnnotations;

namespace ControleDeTarefasAPI.Entities
{
    public class Status
    {
        public int Id { get; set; }

        [MaxLength(20)]
        public string StatusOpcao { get; set; } = string.Empty;
    }
}
