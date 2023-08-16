#include<bits/stdc++.h>
using namespace std;
 
int main()
{
    double salin,salout,money,percent,val,multi;
 
    cin>>salin;
 
    if(salin>=0 && salin<=400.00)
    {
        val=0.15;
    }
    else if(salin>=400.01 && salin<=800.00)
    {
        val=0.12;
    }
    else if(salin>=800.01 && salin<=1200.00)
    {
        val=0.1;
    }
    else if(salin>=1200.01 && salin<=2000.00)
    {
        val=0.07;
    }
    else
    {
        val=0.04;
    }
 
    money=salin*val;
    salout=salin+money;
    percent=val*100;
 
    cout << "Novo salario: " << fixed << setprecision(2) << salout<< endl;
    cout << "Reajuste ganho: " << fixed << setprecision(2) << money << endl;
    cout << "Em percentual: " << fixed << setprecision(0) << percent << " %" << endl;
 
    return 0;
}