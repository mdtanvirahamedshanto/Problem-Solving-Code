#include<bits/stdc++.h>
using namespace std;

int main()
{
    double sal,per,money,selout;
    int percent;
    cin>>sal;

    if(sal>= 0 && sal<=400.00)
    {
        per = 0.15;
    }
    else if(sal>= 400.01 && 800.00 >=sal)
    {
        per = 0.12;
    }
    else if(sal>= 800.01 && 1200.00 >=sal)
    {
        per = 0.10;
    }
    else if(sal>= 1200.01 && 2000.00 >=sal)
    {
        per = 0.07;
    }
    else
    {
        per = 0.04;
    }




    money = sal * per;
    selout = money + sal;
    percent = per *100;

    cout<<fixed<<(setprecision(2)) <<"Novo salario: "<<selout<<endl;
    cout<<fixed<<(setprecision(2))<<"Reajuste ganho: "<<money<<endl;
    cout<<fixed<<(setprecision(0))<<"Em percentual: "<<percent<<" %"<<endl;

return 0;
}