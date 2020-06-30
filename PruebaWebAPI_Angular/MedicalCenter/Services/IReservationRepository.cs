using MedicalCenter.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MedicalCenter.Services
{
    public interface IReservationRepository
    {
        Task<bool> Add(Reservation citas);
        Task<bool> Update(Reservation citas);
        Task<Reservation> GetReservationById(int id);
        Task<List<Reservation>> GetReservationList();
    }
}
