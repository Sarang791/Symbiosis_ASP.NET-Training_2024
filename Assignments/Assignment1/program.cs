using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment1
{
    internal class Program
    {
        public delegate void Operation(int a, int b);
        static void Main(string[] args)
        {
            Arithmatic a = new Arithmatic();
            Console.WriteLine("Enter first Number : ");
            int num1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter second number : ");
            int num2 = Convert.ToInt32(Console.ReadLine());
            Operation ops = null;

            while (true)
            {
                Console.WriteLine("Menu\n1. Add\n2. Multiply\n3. Both\n4. Exit\n\nEnter your Choice : ");
                int choice = Convert.ToInt32(Console.ReadLine());
                switch (choice)
                {
                    case 1:
                        ops += a.AddNumbers;
                        ops(num1, num2);
                        ops -= a.AddNumbers;
                        break;

                    case 2:

                        ops += a.MultyplyNumbers;
                        ops(num1, num2);
                        ops -= a.MultyplyNumbers;
                        break;

                    case 3:
                        ops += a.AddNumbers;
                        ops += a.MultyplyNumbers;
                        ops(num1, num2);
                        ops -= a.AddNumbers;
                        ops -= a.MultyplyNumbers;
                        break;

                    case 4:
                        return;

                    default:
                        Console.WriteLine("Enter valid input!!");
                        break;

                }
            }
        }
    }
}
