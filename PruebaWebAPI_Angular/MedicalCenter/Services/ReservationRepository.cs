using MedicalCenter.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MedicalCenter.Services
{
    public class ReservationRepository : IReservationRepository
    {
        private ApplicationDbContext dbContext;

        public ReservationRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<bool> Add(Reservation reservation)
        {
            bool succes = false;
            try
            {
                await dbContext.Reservation.AddAsync(reservation);
                await dbContext.SaveChangesAsync();
                succes = true;
            }
            catch (Exception ex)
            {
                throw (ex);
            }
            return succes;
        }

        public async Task<Reservation> GetReservationById(int id)
        {
            return await dbContext.Reservation.SingleOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<Reservation>> GetReservationList()
        {
            return await dbContext.Reservation.ToListAsync();
        }

        public async Task<bool> Update(Reservation reservation)
        {
            dbContext.Entry(reservation).State = EntityState.Modified;
            await dbContext.SaveChangesAsync();
            return true;
        }
    }
}
