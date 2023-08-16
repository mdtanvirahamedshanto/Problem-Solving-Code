#include<iostream>
using namespace std;

long long int CalFun(long long int n){
    int is_positive = 1;

    if(n % 2 == 0){
        n = n /2;
    }
    else
    {
        n = (n / 2) + 1;
        is_positive = -1;
    }

    long long int evenS = n*(n+1);
    long long int oddS = n*n;

    return is_positive * (evenS - oddS);
}

int main(){

    long long int n;
    cin >> n;
    cout << CalFun(n) << endl;

return 0;
}