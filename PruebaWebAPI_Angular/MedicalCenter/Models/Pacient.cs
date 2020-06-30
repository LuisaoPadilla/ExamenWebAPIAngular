﻿using System;
using System.Collections.Generic;

namespace MedicalCenter.Models
{
    public partial class Pacient
    {
        public Pacient()
        {
            Reservation = new HashSet<Reservation>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }

        public virtual ICollection<Reservation> Reservation { get; set; }
    }
}
