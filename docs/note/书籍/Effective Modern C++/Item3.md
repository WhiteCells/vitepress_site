### Item3: Understand decltype (理解 decltype)

从一个简答的例子开始

```cpp
const int i = 0; // decltype(i) 是 const int

bool f(const widget &w); // decltype(w) 是 const widget &
                         // decltype(f) 是 bool(const widget &)

struct Point {
    int x;        // decltype(Point::x) 是 int
    int y;        // decltype(Point::y) 是 int
}

template<typename T>
class vector {
    T &operator[](std::size_t index);
}

vector<int> v;     // decltype(v) 是 vector<int>

if (v[0] == 0)     // decltype(v[0]) 是 int &
```

在 C++11 中，decltype 最主要的用途就是用于函数模板返回类型，而这个返回类型依赖形参。举个例子，假设写一个函数，一个参数为容器，一个参数为索引值，这个函数支持使用方括号的方式返回容器中指定索引值的数据，然后在返回索引操作的结果前执行认证用户操作。