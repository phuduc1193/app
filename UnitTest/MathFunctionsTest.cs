using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProjectEuler;
using System.Collections.Generic;

namespace UnitTest
{
    [TestClass]
    public class MathFunctionsTest
    {
        [TestMethod]
        public void Test_SumOfFirstNNaturalNumbers()
        {
            Assert.AreEqual(0, MathFunctions.SumOfFirstNNaturalNumbers(0));
            Assert.AreEqual(1 + 2 + 3, MathFunctions.SumOfFirstNNaturalNumbers(3));
            Assert.AreEqual(1 + 2 + 3 + 4 + 5, MathFunctions.SumOfFirstNNaturalNumbers(5));
        }

        [TestMethod]
        public void Test_IsPalindromic()
        {
            Assert.AreEqual(true, MathFunctions.IsPalindromic(10101));
            Assert.AreEqual(false, MathFunctions.IsPalindromic(12013001));
            Assert.AreEqual(true, MathFunctions.IsPalindromic(9009));
        }
    }
}
