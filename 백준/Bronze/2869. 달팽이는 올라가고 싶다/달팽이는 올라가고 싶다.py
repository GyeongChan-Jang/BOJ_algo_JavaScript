up, down, height = map(int, input().split())

if ((height - down) % (up - down) == 0):
    print((height - down)//(up - down))
else:
    print((height - down)//(up - down)+1)