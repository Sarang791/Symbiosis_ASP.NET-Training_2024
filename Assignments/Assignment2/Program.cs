using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Person> people = new List<Person>() { new Person("A", 22), new Person("B", 23), new Person("C", 21) };

            Console.WriteLine("Before Sorting : ");
            foreach (Person person in people)
            {
                Console.WriteLine(person);
            }

            people.Sort();

            Console.WriteLine("\nAfter Sorting on Age : ");
            foreach (Person person in people)
            {
                Console.WriteLine(person);
            }
        }
    }
}
