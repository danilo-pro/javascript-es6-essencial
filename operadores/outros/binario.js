// Operador binário
// operando1 operador operando2

1 + 2

// Operador unário
// operando1 operador
// operador operando1

x++
++x

// in
something in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;           // retorna true
3 in arvores;           // retorna true
6 in arvores;           // retorna false
"cedro" in arvores;     // retorna false (você deve especificar o número do índice, não o valor naquele índice)
"cedro" in arvores[2];  // retorna true (você especificou exatamente o índice)
"length" in arvores;    // retorna true (length é uma propriedade de Array)

// Objetos predefinidos
"PI" in Math;                           // retorna true
var minhaString = new String("coral");
"length" in minhaString;                // retorna true

// Objetos personalidados
var meuCarro = {marca: "Honda", modelo: "Arcord", ano: 1998};
"marca" in meuCarro;    // retorna true
"modelo" in meuCarro;   // retorna true

// instanceof
objeto instanceof tipoObjeto

var dia = new Date(2021, 04, 29);

if(dia instanceof Date) {
    // code here
}