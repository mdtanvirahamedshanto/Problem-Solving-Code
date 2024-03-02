#include <iostream>

void checkEvenOdd(int n) {
    if (n % 2 == 0) {
        std::cout << "Even" << std::endl;
    } else {
        std::cout << "Odd" << std::endl;
    }
}

int main() {
    int n;
    std::cin >> n;

    
        checkEvenOdd(n);
  
    return 0;
}
