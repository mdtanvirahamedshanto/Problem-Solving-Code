#include <iostream>
#include <vector>

using namespace std;

void countWins(const vector<int>& results) {
    int maryWins = 0;
    int johnWins = 0;

    for (int result : results) {
        if (result == 0) {
            maryWins++;
        } else {
            johnWins++;
        }
    }

    cout << "Mary won " << maryWins << " times and John won " << johnWins << " times" << endl;
}

int main() {
    int N;
    while (cin >> N && N != 0) {
        vector<int> results(N);
        for (int i = 0; i < N; ++i) {
            cin >> results[i];
        }
        countWins(results);
    }

    return 0;
}
