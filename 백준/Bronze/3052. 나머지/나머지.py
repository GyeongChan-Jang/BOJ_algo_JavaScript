
arr = []
arr2 = []

for _ in range(10):
    arr.append(int(input()))

for v in arr:
    arr2.append(v % 42)

print(len(set(arr2)))