using System;
using System.Collections.Generic;

namespace MedicalCenter.Models
{
    public partial class Reservation
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime? DateAt { get; set; }
        public int? PacientId { get; set; }
        public string Symtoms { get; set; }
        public string Sick { get; set; }
        public string Medicaments { get; set; }
        public int? MedicId { get; set; }
        public int StatusId { get; set; }

        public virtual Medic Medic { get; set; }
        public virtual Pacient Pacient { get; set; }
        public virtual Status Status { get; set; }
    }
}
