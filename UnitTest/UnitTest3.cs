using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProjectEuler;
using System.Collections.Generic;

namespace UnitTest
{
    [TestClass]
    public class UnitTest3
    {
        [TestMethod]
        public void Test_GetAllPrimeFactors()
        {
            var list = new List<int> { 2, 5 };
            Assert.AreEqual(list.Count, Problem3.GetAllPrimeFactors(10).Count);
            for (var i = 0; i < list.Count; i++)
                Assert.AreEqual(list[0], Problem3.GetAllPrimeFactors(10)[0]);

            list = new List<int> { 2, 3, 5, 7 };
            Assert.AreEqual(list.Count, Problem3.GetAllPrimeFactors(210).Count);
            for (var i = 0; i < list.Count; i++)
                Assert.AreEqual(list[0], Problem3.GetAllPrimeFactors(210)[0]);

            list = new List<int> { 5, 7, 13, 29 };
            Assert.AreEqual(list.Count, Problem3.GetAllPrimeFactors(13195).Count);
            for (var i = 0; i < list.Count; i++)
                Assert.AreEqual(list[0], Problem3.GetAllPrimeFactors(13195)[0]);

            var problem = new Problem3();
            Assert.AreEqual(6857, actual: Problem3.GetLargestPrimeFactor(600851475143));
        }
    }
}
