# https://codeforces.com/problemset/problem/1553/D

def long (s):
  return len(s)

def sub (s, a, b):
  return s[a:b]

def buscar (s, a):
  return s.find(a)




def backspace2 (s, t):
  ls = long(s)
  palabra = ''
  encontrado = False
  objetivo = ''
  resultados = [{
    "palabra": "",
    "secuencia": ""
  }]

  def procesar (objetivo, palabra, secuencia):
    nonlocal encontrado
    if encontrado:
      return []
    if 1:
      spaces = sub('                      ', long(secuencia), 999999999)
      print(objetivo, secuencia, spaces + palabra)
    r = []
    if palabra == objetivo:
      if objetivo == t:
        encontrado = True
        return []
      resultados.append({"palabra": palabra, "secuencia": secuencia})
        
    # optimización
    restante = sub(s, long(secuencia), 999999999)
    i = 0
    while i < long(objetivo):
      letra = objetivo[i:i+1]
      if (buscar(palabra, letra) < 0) and (buscar(restante, letra) < 0):
        return resultados
      i=i+1
      
    if long(secuencia) == ls:
      return resultados
    pos = long(secuencia)
    letra2 = sub(s, pos, pos + 1)
    # posibilidad 1 : pulsa backspace
    if long(palabra) > 0:
        p2 = sub(palabra, 0, long(palabra) - 1) 
    else: 
        p2 = ''
    r1 = procesar(objetivo, p2, secuencia + '0')
    # posibilidad 2 : pulsa letra
    r2 = procesar(objetivo, palabra + letra2, secuencia + '1')
    return r + r1 + r2

  i = 0
  while i < long(t):
    palabra = objetivo
    letra = t[i:i+1]
    objetivo += letra
    r = []
    j = 0
    while j < long(resultados):
      r = r + procesar(objetivo, resultados[j]['palabra'], resultados[j]['secuencia'])
      if encontrado:
        return True
      j=j+1
    resultados = r
    if long(resultados) == 0:
      return False
    # si no hay para este objetivo ya no seguimos
    i=i+1
  return False

numtests =  int(input('Input:'))
while numtests:
  s = input()
  t = input()
  r = backspace2(s, t)
  print(r)
  numtests = numtests - 1
