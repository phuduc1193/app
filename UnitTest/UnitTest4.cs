using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProjectEuler;
using System.Collections.Generic;

namespace UnitTest
{
    [TestClass]
    public class UnitTest4
    {
        [TestMethod]
        public void Test_LargestPalindromeLessThanN()
        {
            Assert.AreEqual(9999, Problem4.LargestPalindromeLessThanN(10000));
            Assert.AreEqual(0, Problem4.LargestPalindromeLessThanN(0));
            Assert.AreEqual(9889, Problem4.LargestPalindromeLessThanN(9999));
        }

        [TestMethod]
        public void Test_LargestPalindromeProductOf2NDigitNumber()
        {
            //99*91
            Assert.AreEqual(9009, Problem4.LargestPalindromeProductOf2NDigitNumber(2));
            //3*3
            Assert.AreEqual(9, Problem4.LargestPalindromeProductOf2NDigitNumber(1));
            Assert.AreEqual(906609, Problem4.LargestPalindromeProductOf2NDigitNumber(3));
        }
    }
}
