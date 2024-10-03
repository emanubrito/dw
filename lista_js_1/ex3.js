function tipo_tri(l1, l2, l3){

    if(l1==l2 && l2==l3){
       return "triangulo equilatero"    
    }
    if(l1==l2 || l2==l3){
        return "triangulo isoceles"    
     }
     if(l1!=l2 && l2!=l3){
        return "triangulo escaleno"    
     }
}
if(
    (l1 + l2 > l3) &&
    (l2 + l3 > l1) &&
    (l1 + l3 > l2)
){
    console.log(tipo_tri)
}
else{
    return "Triâangulo não existente"
}