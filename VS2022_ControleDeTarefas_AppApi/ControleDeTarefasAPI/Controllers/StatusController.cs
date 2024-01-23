using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ControleDeTarefasAPI.Context;
using ControleDeTarefasAPI.Entities;

namespace ControleDeTarefasAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatusController : ControllerBase
    {
        //atributo somente leitura
        private readonly TarefaContext _context;

        //construtor
        public StatusController(TarefaContext context)
        {
            _context = context;
        }

        // GET: api/Status - metodo exibir todos registros
        [HttpGet("ExibirTodos")]
        public async Task<ActionResult<IEnumerable<Status>>> GetStatuses()
        {
          if (_context.Statuses == null)
          {
              return NotFound();
          }
            return await _context.Statuses.ToListAsync();
        }

        // GET: api/Status/5 - metodo pesquisar por id
        [HttpGet("PesquisarPorId{id}")]
        public async Task<ActionResult<Status>> GetStatus(int id)
        {
          if (_context.Statuses == null)
          {
              return NotFound();
          }
            var status = await _context.Statuses.FindAsync(id);

            if (status == null)
            {
                return NotFound();
            }

            return status;
        }

        // PUT: api/Status/5 - metodo atualizar
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("Atualizar{id}")]
        public async Task<IActionResult> PutStatus(int id, Status status)
        {
            if (id != status.Id)
            {
                return BadRequest();
            }

            _context.Entry(status).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StatusExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Status - metodo incluir
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Incluir")]
        public async Task<ActionResult<Status>> PostStatus(Status status)
        {
          if (_context.Statuses == null)
          {
              return Problem("Entity set 'TarefaContext.Statuses'  is null.");
          }
            _context.Statuses.Add(status);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStatus", new { id = status.Id }, status);
        }

        // DELETE: api/Status/5 - metodo deletar
        [HttpDelete("Deletar{id}")]
        public async Task<IActionResult> DeleteStatus(int id)
        {
            if (_context.Statuses == null)
            {
                return NotFound();
            }
            var status = await _context.Statuses.FindAsync(id);
            if (status == null)
            {
                return NotFound();
            }

            _context.Statuses.Remove(status);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StatusExists(int id)
        {
            return (_context.Statuses?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
