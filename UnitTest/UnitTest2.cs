using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProjectEuler;
using System.Collections.Generic;

namespace UnitTest
{
    [TestClass]
    public class UnitTest2
    {
        [TestMethod]
        public void Test_SumOfFibonacciSequenceLessThanN()
        {
            Assert.AreEqual(2 + 8, Problem2.SumOfEvenFibonacciSequenceLessThanN(10));
            Assert.AreEqual(2 + 8, Problem2.SumOfEvenFibonacciSequenceLessThanN(10, new List<int> { 0, 1 }));
            Assert.AreEqual(2 + 8 + 34, Problem2.SumOfEvenFibonacciSequenceLessThanN(100));
            Assert.AreEqual(2 + 8 + 34 + 144, Problem2.SumOfEvenFibonacciSequenceLessThanN(150));

            var problem = new Problem2();
            Assert.AreEqual(4613732, actual: problem.Solve());
        }
    }
}
