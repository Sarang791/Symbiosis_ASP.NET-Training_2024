using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment1
{
    public delegate void Operation(int a, int b);
    internal class Arithmatic
    {
        public void AddNumbers(int a, int b)
        {
            Console.WriteLine($"Addition : {a + b}");
        }

        public void MultyplyNumbers(int a, int b)
        {
            Console.WriteLine($"Multiplication : {a * b}");
        }
    }
}
