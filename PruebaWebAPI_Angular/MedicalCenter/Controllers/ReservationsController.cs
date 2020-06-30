using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicalCenter.Models;
using MedicalCenter.Services;
using Microsoft.AspNetCore.Mvc;

namespace MedicalCenter.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReservationsController : ControllerBase
    {
        private readonly IReservationRepository repository;
        public ReservationsController(IReservationRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet("{id}")]
        public async Task<Reservation> Get([FromRoute] int id)
        {
            return await repository.GetReservationById(id);
        }

        [HttpPost]
        public async Task<ActionResult<Reservation>> Add([FromBody] Reservation reservation)
        {
            var add = await repository.Add(reservation);
            if (add)
            {
                return Ok();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Reservation>> Update([FromRoute] int id, [FromBody] Reservation reservation)
        {
            var temp = await repository.GetReservationById(id);
            if (temp != null)
            {
                var put = await repository.Update(reservation);
                if (put)
                {
                    return Ok();
                }
            }
            
            return BadRequest(ModelState);
        }
    }
}