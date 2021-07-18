using System;

namespace BubbleSort
{
    class Program
    {
        public static int[] bubbleSort(int[] numbers) {
            int temp = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                for (int j = 0; j < numbers.Length - 1 - i; j++)
                {
                    if (numbers[j] > numbers[j+1])
                    {
                        //Swap numbers
                        temp = numbers[j+1];
                        numbers[j+1] = numbers[j];
                        numbers[j] = temp;
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
            int[] numbers = {99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0};

            Console.WriteLine(Display(bubbleSort(numbers))); 

            // Time Complexity: O(n^2)
            // Space Complexity: O(1)
        }
    }
}