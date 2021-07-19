using System;
using System.Collections.Generic;

namespace InsertionSort
{
    class Program
    {
        public static List<int> insertionSort(List<int> numbers) {
            int item;

            for (int i = 0; i < numbers.Count; i++)
            {
                if (numbers[i] < numbers[0])
                {
                    item = numbers[i];
                    numbers.RemoveAt(i);
                    numbers.Insert(0,item);
                }
                else
                {
                    for (int j = 1; j < i; j++)
                    {
                        if (numbers[i] > numbers[j-1] && numbers[i] < numbers[j])
                        {
                            item = numbers[j];
                            numbers.RemoveAt(i);
                            numbers.Insert(j, item);
                        }
                    }
                }
            }
            return numbers;
        }

        public static string Display(int[] numbers) {
            string nums = null;
            foreach (var item in numbers)
            {
                nums += item.ToString() + " ";
            }
            return nums;
        }
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>() {99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0};
            //numbers.Add(33);
            //numbers.Insert(1, 33);            
            numbers = insertionSort(numbers);

            numbers.ForEach(num => Console.Write(num + " "));

            //Console.WriteLine(Display(insertionSort(numbers))); 

            // Time Complexity: 
            // Space Complexity: 
        }
    }
}
