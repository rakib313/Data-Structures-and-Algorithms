using System;
using System.Collections.Generic;

namespace MargeSort
{
    class Program
    {
        public List<int> mergeSort (List<int> numbers) {
            List<int> left = new List<int>();
            List<int> right = new List<int>();
            if (numbers.Count == 1) 
            {
                return numbers;
            }
            // Split Array in into right and left
            int length = numbers.Count;
            int middle = (int)length/2;

            for (int i = 0; i < middle; i++)
            {
                left.Add(numbers[i]);
            }
            for (int j = middle; j < length; j++)
            {
                right.Add(numbers[j]);
            }
            
            return merge(
                mergeSort(left),
                mergeSort(right)
            );
        }

        public List<int> merge(List<int> left,List<int> right)
        {
            List<int> result = new List<int>();
            int leftIndex = 0, rightIndex = 0;

            while (leftIndex < left.Count && rightIndex < right.Count) 
            {
                if (left[leftIndex] < right[rightIndex])
                {
                    result.Add(left[leftIndex]);
                    leftIndex++;
                } 
                else 
                {
                    result.Add(right[rightIndex]);
                    rightIndex++;
                }
            }
            for (int i = leftIndex; i < left.Count; i++)
            {
                result.Add(left[i]);
            }
            for (int j = rightIndex; j < right.Count; j++)
            {
                result.Add(right[j]);
            }
            System.Console.Write("[ ");
            left.ForEach(num => Console.Write(num + " "));
            System.Console.Write("] ");
            System.Console.Write("[");
            right.ForEach(num => Console.Write(num + " "));
            System.Console.WriteLine("]");

            return result;
        }
    
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>() {99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0};
            Program mySort = new Program();
            numbers.ForEach(num => Console.Write(num + " "));
            System.Console.WriteLine();

            numbers = mySort.mergeSort(numbers);
            numbers.ForEach(num => Console.Write(num + " "));
        }
    }
}
