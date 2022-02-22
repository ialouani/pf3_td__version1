#include<stdio.h>
int main(){
  char* c;int a=12;
  c=(char*)&a;
  printf("%p-%c\n",c,*c);
  return 0;}
