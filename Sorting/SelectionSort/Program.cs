using System;
using System.Collections.Generic;

namespace SelectionSort
{
    class Program
    {
        public static int[] selectionSort(int[] numbers) {
            int temp;
            for (int i = 0; i < numbers.Length; i++)
            {
                int smallestItemIndex = i;
                for (int j = i + 1; j < numbers.Length; j++)
                {
                    if (numbers[smallestItemIndex] > numbers[j])
                    {
                        smallestItemIndex = j;
                    }
                }
                temp = numbers[smallestItemIndex];
                numbers[smallestItemIndex] = numbers[i];
                numbers[i] = temp;
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
            int[] numbers = {99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0};
            

            Console.WriteLine(Display(selectionSort(numbers))); 

            // Time Complexity: O(n^2)
            // Space Complexity: O(1)
        }
    }
}
