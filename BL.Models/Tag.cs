using BusinessLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLibrary
{
    public class Tag
    {
        public int TagId { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Post> Posts { get; private set; } = new HashSet<Post>();
    }
}
