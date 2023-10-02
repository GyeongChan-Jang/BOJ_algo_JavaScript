total = int(input())
sum = 0

for _ in range(int(input())):
    price, count = map(int, input().split())
    sum += (price * count)

if total == sum:
    print('Yes')
else:
    print('No')