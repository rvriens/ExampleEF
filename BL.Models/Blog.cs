using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLibrary

{
    public class Blog
    {
        public int BlogId { get; set; }
        public string Name { get; set; }
        public DateTime CreateDateTime { get; set; }
        public DateTime UpdateDateTime { get; set; }
        public virtual ICollection<Post> Posts { get; private set; } = new HashSet<Post>();
    }

    
}
