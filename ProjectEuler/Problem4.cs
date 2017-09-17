using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectEuler
{
    public class Problem4 : IProblemWithIntResult
    {
        public int Solve()
        {
            throw new NotImplementedException();
        }

        public static int LargestPalindromeProductOf2NDigitNumber(int numberOfDigits)
        {
            var listProductPalindrome = new List<int>();
            for (var first = LargestNDigitNumber(numberOfDigits); first > 0; first--)
            {
                for (var second = first; second > 0; second--)
                {
                    if (MathFunctions.IsPalindromic(first * second))
                        listProductPalindrome.Add(first * second);
                }
            }
            listProductPalindrome.Sort();
            return listProductPalindrome.Last();
        }

        private static bool HasXDigits(int n, int numberOfDigits)
        {
            if (n > (int)Math.Pow(10, (numberOfDigits - 1)) && n < LargestNDigitNumber(numberOfDigits))
                return true;
            return false;
        }

        private static int LargestNDigitNumber(int n)
        {
            return (int)Math.Pow(10, n) - 1;
        }

        public static int LargestPalindromeLessThanN(int n)
        {
            if (n > 0)
                n--;
            while (n >= 0)
            {
                if (MathFunctions.IsPalindromic(n))
                    return n;
                n--;
            }
            return n;
        }
    }
}
