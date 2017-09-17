using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectEuler
{
    public class Problem3 : IProblemWithLongResult
    {
        public long Solve()
        {
            return GetLargestPrimeFactor(600851475143);
        }

        public static List<long> GetAllPrimeFactors(long n)
        {
            if (n <= 1)
                return null;
            var result = new List<long>();

            PrimeFactors(n, ref result);

            return result.Distinct().ToList();
        }

        public static long GetLargestPrimeFactor(long n)
        {
            var primeFactors = GetAllPrimeFactors(n);
            if (primeFactors == null || primeFactors.Count == 0)
                return 0;
            primeFactors.Sort();
            return GetAllPrimeFactors(n).Last();
        }

        private static void PrimeFactors(long n, ref List<long> list)
        {
            if (MathFunctions.IsPrime(n))
            {
                list.Add(n);
                return;
            }
            for (var i = 2; i < Math.Sqrt(n); i++)
            {
                if (n % i == 0)
                {
                    list.Add(i);
                    PrimeFactors(n / i, ref list);
                    return;
                }
            }
        }
    }
}
