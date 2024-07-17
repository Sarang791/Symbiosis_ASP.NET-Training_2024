using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Person : IComparable<Person>
    {
        string name;
        int age;

        public Person(string name, int age)
        {
            this.name = name;
            this.age = age;
        }

        public override string ToString()
        {
            return $"Name : {this.name}  Age : {this.age}";
        }

        public int CompareTo(Person other)
        {
            if (this.age > other.age) { return 1; }
            else if (this.age < other.age) { return -1; }
            else { return 0; }
        }
    }
}
