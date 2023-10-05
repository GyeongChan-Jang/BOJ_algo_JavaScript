n = int(input())

for _ in range(n):
    count, string = input().split()
    for v in string:
        print(v * int(count), end='')
    print()