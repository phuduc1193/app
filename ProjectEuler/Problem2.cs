using System.Collections.Generic;

namespace ProjectEuler
{
    public class Problem2 : IProblemWithIntResult
    {
        public int Solve()
        { return SumOfEvenFibonacciSequenceLessThanN(4000000); }

        public static int SumOfEvenFibonacciSequenceLessThanN(int n, List<int> seed = null)
        {
            if (seed == null || seed.Count != 2)
                seed = new List<int> { 1, 2 };

            seed.Sort();
            var first = seed[0];
            var second = seed[1];

            if (second >= n)
                return 0;
            if (second % 2 == 0)
                return second + SumOfEvenFibonacciSequenceLessThanN(n, new List<int> { second, second + first });
            return SumOfEvenFibonacciSequenceLessThanN(n, new List<int> { second, second + first });
        }
    }
}
