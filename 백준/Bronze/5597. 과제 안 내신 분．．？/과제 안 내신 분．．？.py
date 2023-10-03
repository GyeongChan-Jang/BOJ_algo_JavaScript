students = [v for v in range(1, 31)]

for _ in range(28):
    students.remove(int(input()))
print(students[0])
print(students[1])