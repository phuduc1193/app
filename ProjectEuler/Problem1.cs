using System;
using System.Collections.Generic;
using System.Linq;

namespace ProjectEuler
{
    public class Problem1 : IProblemWithIntResult
    {
        public int Solve()
        {
            return SumOfListDivisiblesLowerThanN(1000, new List<int> { 3, 5 });
        }

        public static int SumOfListDivisiblesLowerThanN(int n, List<int> listDivisibles)
        {
            if (n == 0 || listDivisibles.Count == 0)
                return 0;

            var result = 0;
            listDivisibles = CleanUpListDivisibles(listDivisibles);
            listDivisibles.ForEach(x => result += SumOfDivisiblesOfXLowerThanN(n, x));
            //minus back all values that has duplicated divisibles
            //example 15 is divisible for both 3 or 5 if the list contains them
            var listCombinedDivisibles = ListCombinedDivisibles(listDivisibles);
            listCombinedDivisibles = CleanUpListDivisibles(listCombinedDivisibles);
            listCombinedDivisibles.ForEach(x => result -= SumOfDivisiblesOfXLowerThanN(n, x));
            return result;
        }

        // 3 + 6 + 9 = (3*1) + (3*2) + (3*3) = 3 * (1+2+3) AND (10 - 1) / 3 = 3
        public static int SumOfDivisiblesOfXLowerThanN(int n, int x)
        {
            return x * MathFunctions.SumOfFirstNNaturalNumbers((n - 1) / x);
        }

        private static List<int> CleanUpListDivisibles(List<int> listDivisibles)
        {
            listDivisibles.Sort();
            listDivisibles = listDivisibles.Distinct().ToList();
            if (listDivisibles != null && listDivisibles.Count > 0 && listDivisibles.FirstOrDefault() == 0)
                listDivisibles.RemoveAt(0);
            return listDivisibles;
        }

        private static List<int> ListCombinedDivisibles(List<int> listDivisibles)
        {
            var listCombinedDivisibles = new List<int>();
            listDivisibles.ForEach(x =>
            {
                listDivisibles.ForEach(y =>
                {
                    if (x != y)
                        listCombinedDivisibles.Add(x * y);
                });
            });
            return listCombinedDivisibles;
        }
    }
}
