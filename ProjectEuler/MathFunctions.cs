using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectEuler
{
    public class MathFunctions
    {
        public static int SumOfFirstNNaturalNumbers(int n)
        {
            return n * (n + 1) / 2;
        }

        public static bool IsPrime(long n)
        {
            if (n <= 1 || n % 2 == 0) return false;
            if (n == 2) return true;

            var boundary = (int)Math.Floor(Math.Sqrt(n));

            for (var i = 3; i <= boundary; i = i + 2)
            {
                if (n % i == 0) return false;
            }

            return true;
        }

        public static bool IsPalindromic(int n)
        {
            if (n < 0) throw new Exception();
            if (n < 10) return true;

            var list = new List<int>();
            while (n >= 10)
            {
                list.Add(n % 10);
                n = n / 10;
            }
            list.Add(n);
            var numberOfLoop = (list.Count / 2) + 1;
            for (var i = 0; i < numberOfLoop; i++)
            {
                if (list.First() != list.Last())
                    return false;
                list.RemoveAt(0);
                if (list.Count > 0)
                    list.RemoveAt(list.Count - 1);
                if (list.Count == 0)
                    break;
            }
            return true;
        }
    }
}
