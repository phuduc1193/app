using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProjectEuler;
using System.Collections.Generic;

namespace UnitTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void Test_SumOfListDivisiblesLowerThanN()
        {
            Assert.AreEqual(0, Problem1.SumOfListDivisiblesLowerThanN(10, new List<int>()));
            Assert.AreEqual(0, Problem1.SumOfListDivisiblesLowerThanN(0, new List<int> { 3, 5 }));
            Assert.AreEqual(0, Problem1.SumOfListDivisiblesLowerThanN(15, new List<int> { 0 }));
            Assert.AreEqual(1 + 2, Problem1.SumOfListDivisiblesLowerThanN(3, new List<int> { 1, 0 }));
            Assert.AreEqual(3 + 6 + 9 + 12, Problem1.SumOfListDivisiblesLowerThanN(15, new List<int> { 3, 3 }));
            Assert.AreEqual(3 + 5 + 6 + 9, Problem1.SumOfListDivisiblesLowerThanN(10, new List<int> { 3, 5 }));
            Assert.AreEqual(2 + 3 + 4 + 6 + 8 + 9, Problem1.SumOfListDivisiblesLowerThanN(10, new List<int> { 2, 3 }));
            Assert.AreEqual(2 + 3 + 4 + + 5 + 6 + 8 + 9, Problem1.SumOfListDivisiblesLowerThanN(10, new List<int> { 2, 3, 5 }));

            var problem = new Problem1();
            Assert.AreEqual(233168, actual: problem.Solve());
        }
    }
}
