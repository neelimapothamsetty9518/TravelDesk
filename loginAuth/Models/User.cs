﻿using System.ComponentModel.DataAnnotations;

namespace loginAuth.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(6)]
        public string Password { get; set; }

             public int RoleId { get; set; }
        public Role Role { get; set; }
    }
}
