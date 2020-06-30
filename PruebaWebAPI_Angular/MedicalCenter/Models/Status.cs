using System;
using System.Collections.Generic;

namespace MedicalCenter.Models
{
    public partial class Status
    {
        public Status()
        {
            Reservation = new HashSet<Reservation>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Reservation> Reservation { get; set; }
    }
}
