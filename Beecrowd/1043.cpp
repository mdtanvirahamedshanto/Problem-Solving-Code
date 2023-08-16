#include<bits/stdc++.h>
using namespace std;

int main()
{
    double a,b,c;
    cin>>a>>b>>c;

    if(a<b+c && b<a+c && c<b+a)
    {
        cout<<fixed<<setprecision(1)<< "Perimetro = "<<(double) a+b+c<<endl;
    }
    else
    {
        cout<<fixed<<setprecision(1)<<"Area = "<<(double)0.5 *(a+b)*c<<endl;
    }
return 0;
}
