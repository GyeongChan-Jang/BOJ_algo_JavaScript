count = int(input())
arr = [int(v) for v in input()]


def AccumulationSum(array):
    if len(array) == 1:
        return array[0]
    return array[0] + AccumulationSum(array[1: len(array)])


answer = AccumulationSum(arr)
print(answer)