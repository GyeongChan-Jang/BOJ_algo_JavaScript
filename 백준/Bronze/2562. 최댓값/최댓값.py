max = 0
index = 0


for v in range(9):
    num = int(input())
    if num > max:
        max = num
        index = v+1

print(max)
print(index)