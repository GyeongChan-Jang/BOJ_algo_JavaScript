croatia_alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
string = input()

for v in croatia_alphabet:
    string = string.replace(v, '*')

print(len(string))